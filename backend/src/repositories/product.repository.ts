// src/database/productRepository.ts
import { eq, sql, SQL } from 'drizzle-orm';
import { Db, db as pool, Transaction } from '../db/client';
import { products, Product, NewProduct } from '../db/schema';

export const ProductRepository = (db: Transaction | Db = pool) => ({
  async getCount(): Promise<number> {
    const count = await db.execute(sql`SELECT reltuples::bigint AS count
      FROM pg_class
      WHERE relname = 'products'`);

    return Number(count.rows[0].count);
  },

  async create(newProduct: NewProduct): Promise<Product> {
    const [result] = await db.insert(products).values(newProduct).returning();
    return result;
  },

  async findMany(
    condition?: SQL<unknown>,
    pageSize: number = 25,
    page: number = 1
  ) {
    return db.query.products.findMany({
      where: condition,
      limit: pageSize,
      offset: (page - 1) * pageSize,
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
