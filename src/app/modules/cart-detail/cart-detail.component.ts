import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/app/models/product.model';
import { editProductQuantity, removeProduct } from 'src/app/state/actions/shipping-cart.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListProducts } from 'src/app/state/selectors/products.selectors';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  public productsCartShipping$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productsCartShipping$ = this.store.select(selectProductscart);
  }

  public goToDetail(id: number) {
    this.router.navigate(['/product-detail', id])
  }

  public removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }

  public updateProductQuantity(product: ProductCart) {
    this.store.dispatch(editProductQuantity({ id: product.id, quantity: product.quantity }));
  }

}
