import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
