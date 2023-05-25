import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductsState } from 'src/app/models/state/products.state';

export const selectProductsFeature = (state: AppState) => state.products;

export const selectListProducts = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.products
);

export const selectLoading = createSelector(
    selectProductsFeature,
    (state: ProductsState) => state.loading
);