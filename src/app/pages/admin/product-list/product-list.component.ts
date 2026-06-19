import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product, ProductStatus } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    // Pide todos los productos sin filtro de status (incluye desactivados y vendidos)
    this.productService.getAdminProducts({ limit: 100 }).subscribe({
      next: (res) => {
        this.products = res.products;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  toggleStatus(product: Product) {
    const newStatus = product.status === ProductStatus.ACTIVO ? ProductStatus.DESACTIVADO : ProductStatus.ACTIVO;
    
    // No permitir cambiar status si está vendido, a menos que el admin lo force (opcional, por ahora lo evitamos)
    if (product.status === ProductStatus.VENDIDO) {
      alert('Este producto ya fue vendido. No se puede reactivar directamente.');
      return;
    }

    this.productService.updateProductStatus(product._id, newStatus).subscribe({
      next: (updated) => {
        product.status = updated.status;
      },
      error: (err) => alert('Error al actualizar el estado')
    });
  }

  deleteProduct(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto permanentemente?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter(p => p._id !== id);
        },
        error: () => alert('Error al eliminar')
      });
    }
  }

  markAsSold(product: Product) {
    if (confirm('¿Marcar este producto como VENDIDO? Ya no se podrá comprar en la tienda.')) {
      this.productService.updateProductStatus(product._id, ProductStatus.VENDIDO).subscribe({
        next: (updated) => {
          product.status = updated.status;
        },
        error: () => alert('Error al actualizar')
      });
    }
  }
}
