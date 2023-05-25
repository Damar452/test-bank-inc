import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';
import { addProduct, editProductQuantity, emptyCart, removeProduct } from '../actions/shipping-cart.actions';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { selectProductscart } from '../selectors/shipping-cart.selectors';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) { }

  persistCartToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addProduct, editProductQuantity, removeProduct, emptyCart),
        withLatestFrom(this.store.select(selectProductscart)),
        tap(([action, items]) => {
          localStorage.setItem('cartProducts', JSON.stringify(items));
        })
      ),
    { dispatch: false }
  );
}