import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { Order, orders } from '../db/schema';

export const OrderRepository = {
  async findMany(): Promise<Order[]> {
    return await db.select().from(orders);
  },
  findById(id: number) {
    return db.query.orders.findFirst({
      with: {
        orderPositions: {
          with: {
            product: true,
          },
        },
      },
      where: eq(orders.id, id),
    });
  },
};
