import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/principal/principal.module').then((m) => m.PrincipalModule),
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./modules/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
  {
    path: 'cart-detail',
    loadChildren: () => import('./modules/cart-detail/cart-detail.module').then((m) => m.CartDetailModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
