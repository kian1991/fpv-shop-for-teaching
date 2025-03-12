import { z } from 'zod';
import { NewOrderSchema } from '../db/schema';

// POST Route
export const OrderPostSchema = NewOrderSchema.extend({
  orderPositions: z.array(
    z.object({
      productId: z.number(),
      quantity: z.string(),
    })
  ),
});

export type OrderPost = z.infer<typeof OrderPostSchema>;
