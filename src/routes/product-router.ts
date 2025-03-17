// src/routers/productRouter.ts
import { Hono } from 'hono';
import { NewProductSchema } from '../db/schema';
import { ProductService } from '../services/product-service';
import { PaginationSchema } from '../zod/api-schemas';

export const productRouter = new Hono();

productRouter.post('/', async (c) => {
  const newProduct = await c.req.json();
  const validatedProduct = NewProductSchema.parse(newProduct);
  const createdProduct = await ProductService.createNewProduct(
    validatedProduct
  );
  return c.json(createdProduct);
});

productRouter.get('/:id', async (c) => {
  const { id } = c.req.param();
  const product = await ProductService.getProduct(parseInt(id, 10));
  return product ? c.json(product) : c.notFound();
});

productRouter.get('/', async (c) => {
  const { pageSize, page } = PaginationSchema.parse(c.req.queries());
  const products = await ProductService.getAllProducts(pageSize, page);
  return products ? c.json(products) : c.notFound();
});
