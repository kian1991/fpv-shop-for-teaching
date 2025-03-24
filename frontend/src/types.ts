export const categories = [
  "Clothing",
  "Electronics",
  "Home",
  "Beauty & Health",
  "Gifts",
] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: string;
  imageUrl: string;
  description: string;
};

export type NewProduct = Omit<Product, "id">;

export interface PexelsApiResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
}

export interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export type Pagination = {
  pageSize: number;
  page: number;
  totalItems: number;
};

export type ErrorResponse = {
  error: string;
};

export type PaginatedAPIResponse<T> = {
  data: T;
  pagination: Pagination;
};

export type CombinedAPIResponse<T> = PaginatedAPIResponse<T> & ErrorResponse;

export type APIResponse<T> =
  | {
      data: T;
    }
  | {
      error: string;
    };
