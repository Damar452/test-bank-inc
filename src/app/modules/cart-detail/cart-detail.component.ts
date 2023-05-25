import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/app/models/product.model';
import { editProductQuantity, emptyCart, removeProduct } from 'src/app/state/actions/shipping-cart.actions';
import { AppState } from 'src/app/state/app.state';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  public productsCartShipping$: Observable<any> = new Observable();
  public totalItems: number = 0;
  public totalPriceItems: number = 0;
  public discounts: number = 0;
  public shipment: number = 0;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productsCartShipping$ = this.store.select(selectProductscart);
    this.productsCartShipping$.subscribe( products => {
      this.totalItems = products.reduce(( sum: number, product: ProductCart) => sum + product.quantity, 0)
      this.totalPriceItems = products.reduce( (sum: number, product: ProductCart) => sum + (product.quantity * product.price), 0);
      this.discounts = this.totalPriceItems * 0.01;
      this.shipment = this.totalPriceItems * 0.02;
    })
  }

  public goToDetail(id: number) {
    this.router.navigate(['/product-detail', id])
  }

  public goToPrincipal() {
    this.router.navigate(['/'])
  }

  public removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }

  public updateProductQuantity(product: ProductCart) {
    this.store.dispatch(editProductQuantity({ id: product.id, quantity: product.quantity }));
  }

  public resetShippingCart() {
    this.store.dispatch(emptyCart());
  }

}
