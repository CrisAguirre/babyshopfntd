import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId: string | null = null;
  loading = false;
  
  categories = ['chaquetas', 'pijamas', 'sudaderas', 'conjuntos', 'camisetas', 'vestidos', 'bodies', 'pantalones', 'accesorios'];
  genders = ['niño', 'niña', 'unisex'];
  conditions = ['excelente', 'bueno', 'nuevo con etiqueta'];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['conjuntos', Validators.required],
      size: ['', Validators.required],
      brand: [''],
      gender: ['unisex', Validators.required],
      condition: ['excelente', Validators.required],
      featured: [false]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: string) {
    this.loading = true;
    this.productService.getAdminProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          size: product.size,
          brand: product.brand,
          gender: product.gender,
          condition: product.condition,
          featured: product.featured
        });
        this.loading = false;
      },
      error: () => {
        alert('Error cargando el producto');
        this.router.navigate(['/admin/productos']);
      }
    });
  }

  onSubmit() {
    if (this.productForm.invalid) return;
    
    this.loading = true;
    const productData = this.productForm.value;

    if (this.isEditMode && this.productId) {
      this.productService.updateProduct(this.productId, productData).subscribe({
        next: () => this.router.navigate(['/admin/productos']),
        error: () => { alert('Error actualizando'); this.loading = false; }
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: () => this.router.navigate(['/admin/productos']),
        error: () => { alert('Error creando producto'); this.loading = false; }
      });
    }
  }

  goBack() {
    this.router.navigate(['/admin/productos']);
  }
}
