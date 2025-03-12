// src/database/productRepository.ts
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { products, Product, NewProduct } from '../db/schema';

export const ProductRepository = {
  async create(newProduct: NewProduct): Promise<Product> {
    const [result] = await db.insert(products).values(newProduct).returning();
    return result;
  },

  async findById(id: number): Promise<Product | null> {
    const [result] = await db // array destructuring
      .select()
      .from(products)
      .where(eq(products.id, id));

    return result;
  },
};
