import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { CartItem } from '../../core/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private whatsappService: WhatsappService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.items = items;
    });
  }

  removeItem(productId: string) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    if (confirm('¿Estás seguro de que deseas vaciar tu carrito?')) {
      this.cartService.clearCart();
    }
  }

  checkout() {
    this.whatsappService.checkoutCart();
    // Opcional: vaciar carrito después de hacer checkout? 
    // this.cartService.clearCart();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
