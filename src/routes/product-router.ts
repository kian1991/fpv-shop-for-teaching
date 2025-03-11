// src/routers/productRouter.ts
import { Hono } from 'hono';
import { NewProductSchema } from '../db/schema';
import { ProductService } from '../services/product-service';

export const productRouter = new Hono();

productRouter.post('/products', async (c) => {
  const newProduct = await c.req.json();
  const validatedProduct = NewProductSchema.parse(newProduct);
  const createdProduct = await ProductService.createNewProduct(
    validatedProduct
  );
  return c.json(createdProduct);
});

productRouter.get('/products/:id', async (c) => {
  const { id } = c.req.param();
  const product = await ProductService.getProduct(parseInt(id, 10));
  return product ? c.json(product) : c.notFound();
});
