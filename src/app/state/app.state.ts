
import { ActionReducerMap } from "@ngrx/store";
import { ProductsState } from "../models/state/products.state";
import { productsReducer } from "./reducers/products.reducers";
import { ShippingCartState } from "../models/state/shipping-cart.state";
import { shippingCartReducer } from "./reducers/shipping-cart.reducers";

export interface AppState {
    products: ProductsState,
    shippingCart: ShippingCartState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    products: productsReducer,
    shippingCart: shippingCartReducer
}