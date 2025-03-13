// src/database/productRepository.ts
import { eq, SQL } from 'drizzle-orm';
import { db, Transaction } from '../db/client';
import { products, Product, NewProduct } from '../db/schema';

export const ProductRepository = (tx?: Transaction) => {
  const client = tx ?? db;
  return {
    async create(newProduct: NewProduct): Promise<Product> {
      const [result] = await client
        .insert(products)
        .values(newProduct)
        .returning();
      return result;
    },

    async findMany(condition?: SQL<unknown>) {
      return client.query.products.findMany({
        where: condition,
      });
    },

    async findById(id: number): Promise<Product | null> {
      const [result] = await client // array destructuring
        .select()
        .from(products)
        .where(eq(products.id, id));

      return result;
    },
  };
};
