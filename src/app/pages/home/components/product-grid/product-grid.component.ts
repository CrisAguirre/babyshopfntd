import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.loading = false;
      }
    });
  }
}
