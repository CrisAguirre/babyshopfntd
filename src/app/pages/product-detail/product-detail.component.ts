import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;
  isInCart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private whatsappService: WhatsappService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });

    this.cartService.cartItems$.subscribe(() => {
      if (this.product) {
        this.isInCart = this.cartService.isInCart(this.product._id);
      }
    });
  }

  loadProduct(id: string) {
    this.loading = true;
    this.error = false;
    this.productService.getProductById(id).subscribe({
      next: (prod) => {
        this.product = prod;
        this.isInCart = this.cartService.isInCart(prod._id);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  addToCart() {
    if (this.product && this.product.status !== 'VENDIDO') {
      this.cartService.addToCart(this.product);
    }
  }

  askOnWhatsApp() {
    if (this.product) {
      this.whatsappService.openProductInquiry(this.product.name, this.product._id);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
