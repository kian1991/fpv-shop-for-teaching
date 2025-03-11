import { relations } from 'drizzle-orm';
import {
  date,
  decimal,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const category_enum = pgEnum('category_enum', [
  'Clothing',
  'Electronics',
  'Home',
  'Beauty & Health',
  'Gifts',
]);
export const status_enum = pgEnum('status_enum', [
  'Pending',
  'Shipped',
  'Delivered',
  'Cancelled',
]);

// PRODUCTS

// 1. table definition
export const products = pgTable('products', {
  id: serial().primaryKey(),
  name: text().notNull(),
  category: category_enum().notNull(),
  imageUrl: text('image_url').notNull(),
  description: text().notNull(),
});

// 2. relations
export const productRelations = relations(products, ({ many }) => ({
  orderPositions: many(orderPositions, {
    relationName: 'products_to_order_positions',
  }),
}));

// 3. types
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

// 4. schemas
export const NewProductSchema = createInsertSchema(products, {
  imageUrl: (value) => value.url('This is not a valid url'),
});

// ORDERS

// 1. Table definition
export const orders = pgTable('orders', {
  id: serial().primaryKey(),
  status: status_enum().notNull(),
  createdAt: date('created_at').notNull().defaultNow(),
});

// 2. realations
export const ordersRelations = relations(orders, ({ many }) => ({
  orderPositions: many(orderPositions, {
    relationName: 'orders_to_order_positions',
  }),
}));

// 3. types
export const Order = typeof orders.$inferSelect;
export const NewOrder = typeof orders.$inferInsert;

// 4. Zod
export const NewOrderSchema = createInsertSchema(orders);

// ORDER POSITION
export const orderPositions = pgTable(
  'orderPositions',
  {
    orderId: integer('order_id')
      .notNull()
      .references(() => orders.id),
    productId: integer('product_id')
      .notNull()
      .references(() => products.id),
    quantity: decimal().notNull(),
    price: decimal().notNull(),
  },
  // zusammengesetzter key
  (table) => [primaryKey({ columns: [table.orderId, table.productId] })]
);

// 2. relations
export const orderPositionsRelations = relations(orderPositions, ({ one }) => ({
  order: one(orders, {
    fields: [orderPositions.orderId],
    references: [orders.id],
    relationName: 'orders_to_order_positions',
  }),
  product: one(products, {
    fields: [orderPositions.productId],
    references: [products.id],
    relationName: 'products_to_order_positions',
  }),
}));

// 3. types

// 4. Zod
