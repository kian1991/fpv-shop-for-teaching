import { db } from '../db/client';
import { NewOrderPosition, orderPositions } from '../db/schema';

export const OrderPositionRepository = {
  async create(newOrderPosition: NewOrderPosition) {
    const [result] = await db
      .insert(orderPositions)
      .values(newOrderPosition)
      .returning();
    return result;
  },
};
