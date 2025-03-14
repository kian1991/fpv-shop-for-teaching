// src/database/productRepository.ts
import { eq, SQL } from 'drizzle-orm';
import { Db, db as pool, Transaction } from '../db/client';
import { products, Product, NewProduct } from '../db/schema';

export const ProductRepository = (db: Transaction | Db = pool) => ({
  async create(newProduct: NewProduct): Promise<Product> {
    const [result] = await db.insert(products).values(newProduct).returning();
    return result;
  },

  async findMany(condition?: SQL<unknown>) {
    return db.query.products.findMany({
      where: condition, // optional condition
    });
  },

  async findById(id: number): Promise<Product | null> {
    const [result] = await db // array destructuring
      .select()
      .from(products)
      .where(eq(products.id, id));

    return result;
  },
});
