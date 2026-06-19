import { Component } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  constructor(private whatsappService: WhatsappService) {}

  openWhatsApp() {
    this.whatsappService.openGeneralInquiry();
  }
}
