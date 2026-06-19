import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SlimBannerComponent } from './components/slim-banner/slim-banner.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';


@NgModule({
  declarations: [
    HomeComponent,
    SlimBannerComponent,
    AboutSectionComponent,
    FilterSidebarComponent,
    SortBarComponent,
    ProductGridComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
