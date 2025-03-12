import { Hono } from 'hono';

export const orderRouter = new Hono();

orderRouter.post('/', async (c) => {});
