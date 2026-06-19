import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ImageGalleryComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
