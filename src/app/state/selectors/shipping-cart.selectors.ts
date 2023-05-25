import { createSelector } from '@ngrx/store';
import { ShippingCartState } from 'src/app/models/state/shipping-cart.state';
import { AppState } from '../app.state';

// Obtener el estado del carrito
export const selectShippingCartState = (state: AppState) => state.shippingCart;

// Obtener los productos del carrito
export const selectProductscart = createSelector(
    selectShippingCartState,
  (state: ShippingCartState) => state.products
);

// Obtener el total de productos en el carrito
export const selectTotalProductsCart = createSelector(
    selectShippingCartState,
  ({products}) => products.reduce( (sum, product) =>  sum + product.quantity, 0)
);