import { db as pool, Db, Transaction } from '../db/client';
import { NewOrderPosition, orderPositions } from '../db/schema';

export const OrderPositionRepository = (db: Db | Transaction = pool) => ({
  async create(orderPosition: NewOrderPosition[]) {
    const [res] = await db
      .insert(orderPositions)
      .values(orderPosition)
      .returning();
    return res;
  },
});
