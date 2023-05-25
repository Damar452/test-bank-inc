import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartDetailRoutingModule } from './cart-detail-routing.module';
import { CartDetailComponent } from './cart-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    CartDetailRoutingModule,
    ComponentsModule
  ]
})
export class CartDetailModule { }
