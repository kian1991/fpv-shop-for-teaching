import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ENV } from '../env';
import * as schema from './schema';

const pool = new Pool({
  connectionString: ENV.DATABASE_URL,
});

export const db = drizzle({ client: pool, schema });

export const singleConnectionDb = drizzle(ENV.DATABASE_URL);
