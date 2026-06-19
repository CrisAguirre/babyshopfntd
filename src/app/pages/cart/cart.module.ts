import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
