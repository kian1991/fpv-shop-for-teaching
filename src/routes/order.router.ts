import { Hono } from 'hono';
import { OrderService } from '../services/order.service';
import { z } from 'zod';
import { IdSchema } from '../zod/api-schemas';

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
