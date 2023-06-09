import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectLastAction, selectListProducts } from '../../state/selectors/products.selectors';
import { ProductCart } from 'src/app/models/product.model';
import { addProduct, removeProduct } from 'src/app/state/actions/shipping-cart.actions';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public products$: Observable<any> = new Observable();
  public lastAction!: Action | null;
  public pageIndex: number = 0;
  public pagination: number = 10;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {  
    this.getProducts();
    this.getLastAction();
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

  public getLastAction() {
    this.store.select(selectLastAction).subscribe( action => {
      const newAction = {...action} as any;
      this.pageIndex = newAction?.offset / 10 ;
      this.lastAction = action;
    });
  }

  public onChangePaginator(offset: number) {
    if(this.lastAction) {
      this.store.dispatch({...this.lastAction, offset});
    }
  }
}
