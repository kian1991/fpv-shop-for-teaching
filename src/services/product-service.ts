// src/services/productService.ts
import { NewProduct, Product } from '../db/schema';
import { ProductRepository } from '../repositories/products-repository';

export const ProductService = {
  async createNewProduct(newProduct: NewProduct): Promise<Product> {
    return await ProductRepository.createProduct(newProduct);
  },

  async getProduct(id: number): Promise<Product | null> {
    return await ProductRepository.getProductById(id);
  },

  async getAllProducts(): Promise<Product[]> {
    return await ProductRepository.getAllProducts();
  },
};
