// src/db.ts
import pg from 'pg';
import dotenv from 'dotenv';
import { setTimeout } from 'timers/promises';

dotenv.config();
const { Pool } = pg;

// Configuration with reconnection settings
const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: { rejectUnauthorized: false } // For development only!
};

// Reconnection parameters
const MAX_RETRIES = 5;
const INITIAL_RETRY_DELAY = 1000; // 1 second
const MAX_RETRY_DELAY = 30000; // 30 seconds

// Initialize pool immediately with a disconnected state
let pool: pg.Pool = new Pool(dbConfig);
let isConnecting = false;

export const createPool = (): pg.Pool => {
  const newPool = new Pool(dbConfig);
  
  newPool.on('error', (err) => {
    console.error('Database connection error:', err.message);
    if (!err.message.includes('Connection terminated unexpectedly')) {
      handleDisconnection();
    }
  });

  return newPool;
};

export const connectDB = async (retryCount = 0): Promise<pg.Pool> => {
  if (isConnecting) return pool;
  isConnecting = true;

  try {
    // Create new pool instance
    pool = createPool();
    
    // Test the connection
    const client = await pool.connect();
    client.release();
    
    console.log('PostgreSQL connected...');
    isConnecting = false;
    return pool;
  } catch (err) {
    isConnecting = false;
    console.error('Database connection failed:', err);

    if (retryCount < MAX_RETRIES) {
      const delay = Math.min(
        INITIAL_RETRY_DELAY * Math.pow(2, retryCount),
        MAX_RETRY_DELAY
      );
      
      console.log(`Retrying connection in ${delay/1000} seconds... (Attempt ${retryCount + 1}/${MAX_RETRIES})`);
      await setTimeout(delay);
      return connectDB(retryCount + 1);
    } else {
      console.error('Max connection retries reached');
      process.exit(1);
    }
  }
};

const handleDisconnection = async () => {
  console.log('Attempting to reconnect to database...');
  try {
    await connectDB();
  } catch (err) {
    console.error('Reconnection attempt failed:', err);
  }
};

export const query = async (text: string, params?: any[], retryCount = 0): Promise<pg.QueryResult> => {
  try {
    return await pool.query(text, params);
  } catch (err) {
    if (isConnectionError(err) && retryCount < MAX_RETRIES) {
      console.log(`Query failed, retrying... (Attempt ${retryCount + 1}/${MAX_RETRIES})`);
      await handleDisconnection();
      return query(text, params, retryCount + 1);
    }
    throw err;
  }
};

const isConnectionError = (err: any): boolean => {
  const connectionErrors = [
    'Connection terminated unexpectedly',
    'Connection lost',
    'ECONNRESET',
    'ECONNREFUSED'
  ];
  return connectionErrors.some(msg => err.message.includes(msg));
};

export const getPool = (): pg.Pool => pool;

// Initialize connection when module loads
connectDB().catch(err => {
  console.error('Initial connection failed:', err);
  process.exit(1);
});

export default pool;