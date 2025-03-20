import { Hono } from 'hono';
import { OrderService } from '../services/order.service';
import { IdSchema, OrderPostSchema } from '../zod/api-schemas';

export const orderRouter = new Hono();

orderRouter.get('/', async (c) => {
  const orders = await OrderService.findMany();
  return c.json({ data: orders });
});

orderRouter.get('/:id', async (c) => {
  const id = IdSchema.parse(c.req.param('id'));
  const order = await OrderService.findById(id);
  return c.json({ data: order });
});

orderRouter.post('/', async (c) => {
  const body = await c.req.json();
  // validate body
  const parsedData = OrderPostSchema.parse(body);
  const insertedOrder = await OrderService.create(parsedData);
  return c.json({ data: insertedOrder }, 201);
});
