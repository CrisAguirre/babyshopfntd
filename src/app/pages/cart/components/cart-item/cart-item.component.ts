import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../../core/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() remove = new EventEmitter<string>();

  get coverImage(): string {
    if (this.item.product.images && this.item.product.images.length > 0) {
      return `https://babyshopbknd.onrender.com/uploads/${this.item.product.images[0]}`;
    }
    return 'assets/placeholder-baby.jpg';
  }

  onRemove() {
    this.remove.emit(this.item.product._id);
  }
}
