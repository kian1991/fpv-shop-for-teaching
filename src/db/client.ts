import { drizzle, NodePgQueryResultHKT } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { ENV } from '../env';
import * as schema from './schema';

// for the running api we use connection pooling
const pool = new Pool({
  connectionString: ENV.DATABASE_URL,
});

export const db = drizzle({ client: pool, schema });

export const singleConnectionDb = drizzle(ENV.DATABASE_URL, { schema });

export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0];
export type Db = typeof db;
