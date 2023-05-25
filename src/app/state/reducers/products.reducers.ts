import { createReducer, on, Action } from '@ngrx/store';
import { loadProducts, loadProductsByCategory, loadProductsByTitle, loadedProducts } from '../actions/products.actions';
import { ProductsState } from '../../models/state/products.state';


export const initialState: ProductsState = { products: [], lastAction: null }

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state, action) => {
        return { ...state, lastAction: action }
    }),
    on(loadProductsByTitle, (state, action) => {
        return { ...state, lastAction: action }
    }),
    on(loadProductsByCategory, (state, action) => {
        return { ...state, lastAction: action }
    }),
    on(loadedProducts, (state, { products }) => {
        return { ...state, products }
    }),
)