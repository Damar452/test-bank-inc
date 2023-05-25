import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { loadProducts, loadProductsByCategory, loadProductsByTitle, loadedProducts } from '../actions/products.actions';
import { ProductsService } from 'src/app/services/bussiness/products/products.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';


@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) { }

  loadProducts$ = createEffect((): Observable<Action> =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map(products => loadedProducts({ products }))
        )
      )
    )
  );

  loadProductsByTitle$ = createEffect((): Observable<Action> =>
    this.actions$.pipe(
      ofType(loadProductsByTitle),
      switchMap(action =>
        this.productService.getProductByTitle(action.title).pipe(
          map(products => loadedProducts({ products }))
        )
      )
    )
  );

  loadProductsByCategory$ = createEffect((): Observable<Action> =>
    this.actions$.pipe(
      ofType(loadProductsByCategory),
      switchMap(action =>
        this.productService.getProductsByCategory(action.id).pipe(
          map(products => loadedProducts({ products }))
        )
      )
    )
  );
}