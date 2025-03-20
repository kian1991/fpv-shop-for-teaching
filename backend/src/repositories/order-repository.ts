import { db, Transaction } from '../db/client';
import { NewOrder, orders } from '../db/schema';

export const OrderRepository = (tx?: Transaction) => {
  const client = tx ?? db;
  // CRUD
  return {
    async create(newOrder: NewOrder) {
      const [result] = await client.insert(orders).values(newOrder).returning();
      return result;
    },
  };
};
