export enum ProductStatus {
  ACTIVO = 'ACTIVO',
  DESACTIVADO = 'DESACTIVADO',
  VENDIDO = 'VENDIDO'
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  size: string;
  brand: string;
  condition: string;
  gender: string;
  status: ProductStatus;
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedResponse<T> {
  products: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}
