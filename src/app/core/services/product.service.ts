import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, PaginatedResponse, ProductStatus } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://babyshopbknd.onrender.com/api';

  constructor(private http: HttpClient) { }

  // Public Methods
  getProducts(filters: any = {}): Observable<PaginatedResponse<Product>> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });
    return this.http.get<PaginatedResponse<Product>>(`${this.apiUrl}/products`, { params });
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/featured`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  // Admin Methods (Require Auth Interceptor)
  getAdminProducts(filters: any = {}): Observable<PaginatedResponse<Product>> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });
    return this.http.get<PaginatedResponse<Product>>(`${this.apiUrl}/admin/products`, { params });
  }

  getAdminStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/stats`);
  }

  getAdminProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/admin/products/${id}`);
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/admin/products`, product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/admin/products/${id}`, product);
  }

  updateProductStatus(id: string, status: ProductStatus): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/admin/products/${id}/status`, { status });
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/admin/products/${id}`);
  }
}
