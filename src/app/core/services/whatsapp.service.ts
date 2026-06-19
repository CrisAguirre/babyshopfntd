import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // Número proporcionado por el usuario
  private phoneNumber = '573026984287';

  constructor(private cartService: CartService) { }

  openGeneralInquiry() {
    const text = '¡Hola Shop Baby Shop! 💕 Quisiera hacerles una consulta:';
    this.openWhatsApp(text);
  }

  openProductInquiry(productName: string, productId: string) {
    const text = `¡Hola Shop Baby Shop! 💕 Estoy interesado/a en este producto:\n\n*${productName}*\n(Ref: ${productId})\n\n¿Me podrían dar más información?`;
    this.openWhatsApp(text);
  }

  checkoutCart() {
    const items = this.cartService.items;
    if (items.length === 0) return;

    const total = this.cartService.getTotal();
    let text = '🍼 ¡Hola Shop Baby Shop! 💕\n\nQuisiera pedir los siguientes artículos:\n\n';

    items.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} - Talla ${item.product.size} → $${item.product.price.toLocaleString('es-CO')}\n`;
    });

    text += `\n💰 *Total: $${total.toLocaleString('es-CO')} COP*\n\n¡Gracias! 🎀`;
    
    this.openWhatsApp(text);
  }

  private openWhatsApp(text: string) {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${this.phoneNumber}?text=${encodedText}`, '_blank');
  }
}
