import { useMutation, useQuery } from "@tanstack/react-query";
import {
  APIResponse,
  CombinedAPIResponse,
  NewProduct,
  PaginatedAPIResponse,
  Product,
} from "../types";
import axios from "axios";
import { API_BASE_URL } from "../constants";

export const useProducts = (page: number, pageSize: number) =>
  useQuery<PaginatedAPIResponse<Product[]>>({
    queryKey: ["products", page, pageSize],
    queryFn: async () => {
      const { data } = await axios.get<CombinedAPIResponse<Product[]>>(
        `${API_BASE_URL}/products`,
        {
          params: {
            page,
            pageSize,
          },
        },
      );
      // check for Errors
      if ("error" in data) throw new Error(data.error);
      return data;
    },
  });

export const useCreateProduct = () =>
  useMutation<Product, unknown, NewProduct>({
    mutationFn: async (product: NewProduct) => {
      const { data } = await axios.post<APIResponse<Product>>(
        `${API_BASE_URL}/products`,
        {
          data: JSON.stringify(product),
        },
      );
      if ("error" in data) throw new Error(data.error);
      return data.data;
    },
  });
