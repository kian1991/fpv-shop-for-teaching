import { z } from 'zod';

export const IdSchema = z.coerce.number({ message: 'Invalid id provided.' });

// POST Route
const OrderPositionSchema = z.object({
  productId: IdSchema,
  quantity: z.string(),
});

export const OrderPostSchema = z.object({
  userId: IdSchema,
  orderPositions: z
    .array(OrderPositionSchema)
    .nonempty('No order positions provided.'),
});

export const PaginationSchema = z.object({
  page: z.coerce.number().positive().optional(),
  pageSize: z.coerce.number().positive().optional(),
  totalItems: z.coerce.number().positive().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export type OrderPost = z.infer<typeof OrderPostSchema>;
