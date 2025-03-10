import { pgEnum, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const category_enum = pgEnum('category_enum', [
  'Clothing',
  'Electronics',
  'Home',
  'Beauty & Health',
  'Gifts',
]);

// 1. table definition
export const products = pgTable('products', {
  id: serial().primaryKey(),
  name: text().notNull(),
  category: category_enum().notNull(),
  imageUrl: text('image_url').notNull(),
  description: text().notNull(),
});

// 2. relations

// 3. types
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

// 4. schemas
export const NewProductSchema = createInsertSchema(products, {
  imageUrl: (value) => value.url('This is not a valid url'),
});
