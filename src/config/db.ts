// src/config/db.ts
import pg from "pg";
import dotenv from "dotenv";
import { setTimeout } from "timers/promises";

dotenv.config();
const { Pool } = pg;

// Single database pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

const MAX_RETRIES = 5;
const INITIAL_RETRY_DELAY = 1000;
const MAX_RETRY_DELAY = 30000;

// Reconnect on idle errors
pool.on("error", async (err) => {
  console.error("Postgres pool error:", err.message || err);
  for (let i = 1; i <= MAX_RETRIES; i++) {
    const delay = Math.min(INITIAL_RETRY_DELAY * 2 ** (i - 1), MAX_RETRY_DELAY);
    console.log(`Reconnecting to DB in ${delay}ms (attempt ${i})`);
    await setTimeout(delay);
    try {
      const client = await pool.connect();
      client.release();
      console.log("Reconnected to Postgres");
      break;
    } catch (e) {
      console.error("Reconnect failed:", (e as Error).message || e);
      if (i === MAX_RETRIES) process.exit(1);
    }
  }
});

(async () => {
  try {
    const client = await pool.connect();
    client.release();
    console.log("Connected to Postgres DB");
  } catch (err: any) {
    console.error("Initial DB connection failed:", err.message || err);
    process.exit(1);
  }
})();

// unified query function
export async function query(
  text: string,
  params?: any[]
): Promise<pg.QueryResult> {
  return pool.query(text, params);
}

// if you ever need direct pool access
export const getPool = (): pg.Pool => pool;