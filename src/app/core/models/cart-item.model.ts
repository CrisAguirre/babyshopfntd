import { Product } from './product.model';

export interface CartItem {
  product: Product;
}
// Note: As each product is unique (second hand), there is no 'quantity' field. 
// A product is either in the cart or not.
