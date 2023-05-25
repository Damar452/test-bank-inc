import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadProducts = createAction(
    '[Product List] Load products'
)

export const loadedProducts = createAction(
    '[Product List] Loaded success',
    props<{products: Product[]}>()
)
 