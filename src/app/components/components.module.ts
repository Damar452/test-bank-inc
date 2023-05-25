import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ImagesCarouselComponent } from './images-carousel/images-carousel.component';
import { ProductCardGeneralComponent } from './product-card-general/product-card-general.component';
import { ProductCardDetailComponent } from './product-card-detail/product-card-detail.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ImagesCarouselComponent,
    ProductCardGeneralComponent,
    ProductCardDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ImagesCarouselComponent,
    ProductCardGeneralComponent,
    ProductCardDetailComponent
  ]
})
export class ComponentsModule { }
