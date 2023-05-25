import { createReducer, on } from '@ngrx/store';
import { ShippingCartState } from 'src/app/models/state/shipping-cart.state';
import { Product } from 'src/app/models/product.model';
import { addProduct, editProductQuantity, emptyCart, removeProduct } from '../actions/shipping-cart.actions';


// Estado inicial del carrito
const initialState: ShippingCartState = {
  products: JSON.parse(localStorage.getItem('cartProducts')!) || []
};

export const shippingCartReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product]
  })),
  on(removeProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((product: Product) => product.id !== id)
  })),
  on(editProductQuantity, (state, { id, quantity }) => ({
    ...state,
    products: state.products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity
        };
      }
      return product;
    })
  })),
  on(emptyCart, (state) => ({
    ...state,
    products: []
  }))
);