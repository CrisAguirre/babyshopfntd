import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { PriceTagComponent } from './components/price-tag/price-tag.component';
import { SizeBadgeComponent } from './components/size-badge/size-badge.component';
import { ConditionBadgeComponent } from './components/condition-badge/condition-badge.component';
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { CurrencyCopPipe } from './pipes/currency-cop.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    WhatsappButtonComponent,
    PriceTagComponent,
    SizeBadgeComponent,
    ConditionBadgeComponent,
    LoadingSkeletonComponent,
    BackToTopComponent,
    CurrencyCopPipe,
    TruncatePipe,
    LazyImgDirective,
    AnimateOnScrollDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    WhatsappButtonComponent,
    PriceTagComponent,
    SizeBadgeComponent,
    ConditionBadgeComponent,
    LoadingSkeletonComponent,
    BackToTopComponent,
    CurrencyCopPipe,
    TruncatePipe,
    LazyImgDirective,
    AnimateOnScrollDirective
  ]
})
export class SharedModule { }
