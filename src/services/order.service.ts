import { HTTPException } from 'hono/http-exception';
import { Order } from '../db/schema';
import { OrderRepository } from '../repositories/order.repository';

export const OrderService = {
  async findMany(): Promise<Order[]> {
    return await OrderRepository.findMany();
  },
  async findById(id: number) {
    const order = await OrderRepository.findById(id);
    if (!order) throw new HTTPException(404, { message: 'No orders found' });
    return order;
  },
};
