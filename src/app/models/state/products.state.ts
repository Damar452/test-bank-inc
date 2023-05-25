import { Product } from "../product.model";
import { Action } from '@ngrx/store';


export interface ProductsState {
    products: ReadonlyArray<Product>,
    lastAction: Action | null,
}