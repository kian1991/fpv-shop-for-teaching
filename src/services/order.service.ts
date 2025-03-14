import { HTTPException } from 'hono/http-exception';
import { NewOrderPosition, Order, products } from '../db/schema';
import { OrderRepository } from '../repositories/order.repository';
import { OrderPost } from '../zod/api-schemas';
import { db } from '../db/client';
import { ProductRepository } from '../repositories/product.repository';
import { inArray } from 'drizzle-orm';
import { OrderPositionRepository } from '../repositories/order-position.repository';

export const OrderService = {
  async findMany(): Promise<Order[]> {
    return await OrderRepository().findMany();
  },
  async findById(id: number) {
    const order = await OrderRepository().findById(id);
    if (!order) throw new HTTPException(404, { message: 'No orders found' });
    return order;
  },
  async create(orderData: OrderPost) {
    return await db.transaction(async (tx) => {
      // 📌 Step 1️⃣: Create Order
      const [insertedOrder] = await OrderRepository(tx).create({
        userId: orderData.userId,
        status: 'Pending',
      });

      // Step 2: get and validate products
      const productIds = orderData.orderPositions.map(
        (position) => position.productId
      );

      const relatedProducts = await ProductRepository(tx).findMany(
        inArray(products.id, productIds)
      );

      // Build order positions for later
      const orderPositions: NewOrderPosition[] = orderData.orderPositions.map(
        (position) => {
          // check if product exists
          const relatedProduct = relatedProducts.find(
            (p) => p.id === position.productId
          );

          if (relatedProduct === undefined) {
            throw new HTTPException(400, {
              message: `Product with id ${position.productId} no found!`,
            });
          }
          // return order position
          return {
            orderId: insertedOrder.id,
            price: relatedProduct.price,
            productId: relatedProduct.id,
            quantity: position.quantity,
          };
        }
      );

      // 📌 Step 3️⃣: Insert Order Positions 🔥
      await OrderPositionRepository(tx).create(orderPositions);

      // 📌 Step 4️⃣: Return inserted Order from transaction for later usage 🦭
      return insertedOrder;
    });
  },
};
