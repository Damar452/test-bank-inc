import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListProducts } from '../../state/selectors/products.selectors';
import { ProductCart } from 'src/app/models/product.model';
import { addProduct, removeProduct } from 'src/app/state/actions/shipping-cart.actions';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public products$: Observable<any> = new Observable();

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {  
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.store.select(selectListProducts);   
  }

  public goToDetail(id: string | number) {
    this.router.navigate(['/product-detail', id])
  }

  public saveInCart(product: ProductCart) {
    this.store.dispatch(addProduct({product}));
  }

  public removeProduct(id: number) {
    this.store.dispatch(removeProduct({id}));
  }

}
