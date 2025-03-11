// src/tests/productService.test.ts
import { ProductService } from '../services/product-service';
import { describe, expect, it, mock } from 'bun:test';
import { Product, NewProduct } from '../db/schema';
import { ProductRepository } from '../repositories/products-repository';

const createProductMock = mock();
const getProductByIdMock = mock();
const getAllProductsMock = mock();

mock.module('../repositories/products-repository', () => ({
  ProductRepository: {
    createProduct: createProductMock,
    getProductById: getProductByIdMock,
    getAllProducts: getAllProductsMock,
  },
}));

describe('Product Service', () => {
  it('should return all products in an array', async () => {
    const products: Product[] = [
      {
        id: 1,
        name: 'BetaFPV Pavo Femto',
        category: 'Electronics',
        description: 'A tiny whoop capable enough.',
        imageUrl: 'http://fpv-shop/image.jpg',
      },
      {
        id: 2,
        name: 'Squatsquad Eraser 400 Analog',
        category: 'Electronics',
        description: 'A full fledged 5 inch beast.',
        imageUrl: 'http://fpv-shop/image.jpg',
      },
    ];

    getAllProductsMock.mockResolvedValue(products);

    const allProductsResult = await ProductService.getAllProducts();
    // check if mock has been called
    expect(getAllProductsMock).toHaveBeenCalled();
    expect(allProductsResult).toEqual(products);
  });
});
