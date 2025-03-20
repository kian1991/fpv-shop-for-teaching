import { eq } from 'drizzle-orm';
import { Db, db as pool, Transaction } from '../db/client';
import { NewOrder, Order, orders } from '../db/schema';

export const OrderRepository = (db: Db | Transaction = pool) => ({
  findMany(): Promise<Order[]> {
    return db.select().from(orders);
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
  create(order: NewOrder) {
    return db.insert(orders).values(order).returning();
  },
});
