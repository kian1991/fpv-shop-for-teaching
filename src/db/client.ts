import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ENV } from '../env';

const pool = new Pool({
  connectionString: ENV.DATABASE_URL,
});

export const db = drizzle({ client: pool });

export const singleConnectionDb = drizzle(ENV.DATABASE_URL);
