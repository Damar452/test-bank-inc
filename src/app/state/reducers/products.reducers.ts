import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadedProducts } from '../actions/products.actions';
import { ProductsState } from '../../models/state/products.state';


export const initialState: ProductsState = { loading: false, products: [] }

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedProducts, (state, { products }) => {
        return { ...state, loading: false, products }
    }),
)