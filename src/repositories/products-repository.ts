// src/database/productRepository.ts
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { products, Product, NewProduct } from '../db/schema';

export const ProductRepository = {
  async createProduct(newProduct: NewProduct): Promise<Product> {
    const [result] = await db.insert(products).values(newProduct).returning();
    return result;
  },

  async getProductById(id: number): Promise<Product | null> {
    const [result] = await db
      .select()
      .from(products)
      .where(eq(products.id, id))
      .limit(1);

    return result;
  },

  async getAllProducts(): Promise<Product[]> {
    return await db.query.products.findMany();
  },
};
