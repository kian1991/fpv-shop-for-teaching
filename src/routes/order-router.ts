import { Hono } from 'hono';
import { OrderPostSchema } from '../zod/api-schemas';
import { OrderService } from '../services/order-service';

export const orderRouter = new Hono();

orderRouter.post('/', async (c) => {
  const body = await c.req.json();
  const orderData = OrderPostSchema.parse(body);
  const insertedOrder = await OrderService.create(orderData);
  return c.json({ data: insertedOrder });
});
