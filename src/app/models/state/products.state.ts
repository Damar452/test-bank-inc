import { Product } from "../product.model";


export interface ProductsState {
    loading: boolean,
    products: ReadonlyArray<Product>
}