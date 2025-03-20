import { db } from '../db/client';
import {
  NewOrderPosition,
  Order,
  orderPositions,
  orders,
  products,
} from '../db/schema';
import { OrderRepository } from '../repositories/order-repository';
import { OrderPost } from '../zod/api-schemas';
import { inArray } from 'drizzle-orm';
import { HTTPException } from 'hono/http-exception';
import { ProductRepository } from '../repositories/product.repository';

export const OrderService = {
  async create(orderWithPositions: OrderPost): Promise<Order> {
    const result = await db.transaction(async (tx) => {
      // Step #1: create order and get id
      const insertedOrder = await OrderRepository(tx).create({
        status: orderWithPositions.status,
        userId: orderWithPositions.userId,
      });

      // Step #2: Get products and prices
      const relatedProducts = await ProductRepository(tx).findMany(
        inArray(
          products.id,
          orderWithPositions.orderPositions.map((pos) => pos.productId) // => [1, 3, 2]
        )
      );

      // Step #3: insert orderPositions and map prices
      const orderPositionsToInsert: NewOrderPosition[] =
        orderWithPositions.orderPositions.map((position, index) => {
          if (!relatedProducts[index])
            throw new HTTPException(400, {
              message: `Product with id ${position.productId} has not been found.`,
            });

          return {
            orderId: insertedOrder.id,
            price: relatedProducts[index].price,
            productId: position.productId,
            quantity: position.quantity,
          };
        });

      await tx.insert(orderPositions).values(orderPositionsToInsert);
      return insertedOrder;
    });

    return result;
  },
};
