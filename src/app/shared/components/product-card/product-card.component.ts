import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  get coverImage(): string {
    if (this.product.images && this.product.images.length > 0) {
      return `assets/fotos/${this.product.images[0]}`;
    }
    return 'assets/placeholder-baby.jpg';
  }
}
