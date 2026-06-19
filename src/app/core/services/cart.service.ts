import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const savedCart = localStorage.getItem('babyshop_cart');
    if (savedCart) {
      try {
        this.cartItems.next(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart', e);
        this.cartItems.next([]);
      }
    }
  }

  private saveCart(items: CartItem[]) {
    localStorage.setItem('babyshop_cart', JSON.stringify(items));
    this.cartItems.next(items);
  }

  get items(): CartItem[] {
    return this.cartItems.getValue();
  }

  addToCart(product: Product) {
    const currentItems = this.items;
    const exists = currentItems.find(item => item.product._id === product._id);
    
    // Unique items, don't add duplicates
    if (!exists) {
      this.saveCart([...currentItems, { product }]);
    }
  }

  removeFromCart(productId: string) {
    const currentItems = this.items;
    this.saveCart(currentItems.filter(item => item.product._id !== productId));
  }

  clearCart() {
    this.saveCart([]);
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.product.price, 0);
  }

  get itemCount(): number {
    return this.items.length;
  }
  
  isInCart(productId: string): boolean {
    return !!this.items.find(item => item.product._id === productId);
  }
}
