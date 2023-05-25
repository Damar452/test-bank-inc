import { createAction, props } from '@ngrx/store';
import { Product, ProductCart } from 'src/app/models/product.model';

// Agregar un producto al carrito
export const addProduct = createAction(
    '[Shipping Cart] Add Product',
    props<{ product: ProductCart }>()
);

// Eliminar un producto del carrito
export const removeProduct = createAction(
    '[Shipping Cart] Remove Product',
    props<{ id: number }>()
);

export const editProductQuantity = createAction(
    '[Shipping Cart] Edit Quantity Product',
    props<{ id: number, quantity: number }>()
)

// Vaciar el carrito
export const emptyCart = createAction(
    '[Shipping Cart] Empty Cart'
);

