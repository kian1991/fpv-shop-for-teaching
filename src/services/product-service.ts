// src/services/productService.ts
import { NewProduct, Product } from '../db/schema';
import { ENV } from '../env';
import { ProductRepository } from '../repositories/product.repository';
import { Pagination } from '../zod/api-schemas';

export const ProductService = {
  async createNewProduct(newProduct: NewProduct): Promise<Product> {
    return await ProductRepository.createProduct(newProduct);
  },

  async getProduct(id: number): Promise<Product | null> {
    return await ProductRepository.getProductById(id);
  },

  async getAllProducts(
    pageSize: number = 25,
    page: number = 1
  ): Promise<{ data: Product[]; pagination: Pagination }> {
    const products = await ProductRepository().findMany(
      undefined,
      pageSize,
      page
    );

    const totalItems = await ProductRepository().getCount();

    return {
      data: products,
      pagination: {
        page,
        pageSize,
        totalItems,
      },
    };
  },
};
