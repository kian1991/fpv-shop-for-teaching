import { Hono } from 'hono';
import { errorMiddleware } from './error-middleware';
import { db } from './db/client';
import { orderRouter } from './routes/order.router';
import { productRouter } from './routes/product-router';
import { cors } from 'hono/cors';

const app = new Hono();

app.use(cors());

app.route('/orders', orderRouter);
app.route('/products', productRouter);

app.get('/', async (c) => {
  return c.json(`Muh 🥩`);
});

app.onError(errorMiddleware);

export default app;
