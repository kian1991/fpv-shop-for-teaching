import { Hono } from 'hono';
import { ENV } from './env';

const app = new Hono();

app.get('/', (c) => {
  return c.text(`${ENV.DATABASE_URL}`);
});

export default app;
