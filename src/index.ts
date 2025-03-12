import { Hono } from 'hono';
import { errorMiddleware } from './error-middleware';
import { db } from './db/client';

const app = new Hono();

app.get('/', async (c) => {
  return c.json({ orders: await db.query.orders.findMany() });
});

app.onError(errorMiddleware);

export default app;
