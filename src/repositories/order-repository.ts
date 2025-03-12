import { PgTransaction } from 'drizzle-orm/pg-core';
import { db, Transaction } from '../db/client';
import { NewOrder, orders } from '../db/schema';

export const OrderRepository = (client: typeof db | Transaction) => ({
  async create(newOrder: NewOrder) {
    const [result] = await client.insert(orders).values(newOrder).returning();
    return result;
  },
});
