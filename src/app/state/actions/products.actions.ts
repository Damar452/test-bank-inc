import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadProducts = createAction(
    '[Product List] Load products',
)

export const loadProductsByTitle = createAction(
    '[Product List] Load products By Title',
    props<{title: string}>()
)

export const loadProductsByCategory = createAction(
    '[Product List] Load products By Title',
    props<{id: number}>()
)

export const loadedProducts = createAction(
    '[Product List] Loaded success',
    props<{products: Product[]}>()
)
 