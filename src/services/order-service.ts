import { db } from '../db/client';
import {
  NewOrderPosition,
  Order,
  orderPositions,
  orders,
  products,
} from '../db/schema';
import { OrderPost } from '../zod/api-schemas';
import { inArray } from 'drizzle-orm';
import { HTTPException } from 'hono/http-exception';

export const OrderService = {
  async create(orderWithPositions: OrderPost): Promise<Order> {
    await db.transaction(async (tx) => {
      // Step #1: create order and get id
      const [insertedOrder] = await tx
        .insert(orders)
        .values({ status: orderWithPositions.status })
        .returning({ id: orders.id });

      // Step #2: Get products and prices
      const relatedProducts = await tx.query.products.findMany({
        where: inArray(
          products.id,
          orderWithPositions.orderPositions.map((pos) => pos.productId) // => [1, 3, 2]
        ),
      });

      // Step #4: insert orderPositions and map prices
      const orderPositionsToInsert: NewOrderPosition[] =
        orderWithPositions.orderPositions.map((position, index) => {
          if (!relatedProducts[index])
            throw new HTTPException(400, {
              message: `position with id ${position.productId} has not been found.`,
            });
          return {
            orderId: insertedOrder.id,
            price: relatedProducts[index].price,
            productId: position.productId,
            quantity: position.quantity,
          };
        });

      await tx.insert(orderPositions).values(orderPositionsToInsert);
    });
  },
};
