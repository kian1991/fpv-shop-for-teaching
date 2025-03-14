import { z } from 'zod';

export const IdSchema = z.coerce.number({ message: 'Invalid id provided.' });

// POST Route
const OrderPositionSchema = z.object({
  productId: IdSchema,
  quantity: z.number(),
});

export const OrderPostSchema = z.object({
  userId: IdSchema,
  orderPositions: z
    .array(OrderPositionSchema)
    .nonempty('No order positions provided.'),
});

export type OrderPost = z.infer<typeof OrderPostSchema>;
