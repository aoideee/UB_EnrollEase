import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
//    ssl: {
//        rejectUnauthorized: false // For development only!
//    }
});

export const connectDB = async () => {
    try {
        await pool.connect();
        console.log('PostgreSQL connected...');
    } catch (err) {
        console.error('Database connection error', err);
        process.exit(1);
    }
};

export const query = async (text: string, params?: any[]) => {
    return await pool.query(text, params);
};

export default pool;