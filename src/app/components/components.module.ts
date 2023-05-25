import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ImagesCarouselComponent } from './images-carousel/images-carousel.component';
import { ProductCardGeneralComponent } from './product-card-general/product-card-general.component';
import { ProductCardDetailComponent } from './product-card-detail/product-card-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ImagesCarouselComponent,
    ProductCardGeneralComponent,
    ProductCardDetailComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    ImagesCarouselComponent,
    ProductCardGeneralComponent,
    ProductCardDetailComponent,
    PaginatorComponent
  ],
  providers: [
    HttpClientModule
  ]
})
export class ComponentsModule { }
