import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  @Output() checkout = new EventEmitter<void>();
  
  itemCount = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(() => {
      this.itemCount = this.cartService.itemCount;
      this.total = this.cartService.getTotal();
    });
  }

  onCheckout() {
    this.checkout.emit();
  }
}
