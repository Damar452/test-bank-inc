import {  ProductCart } from "../product.model";


export interface ShippingCartState {
    products: ReadonlyArray<ProductCart>
}