import { Category } from "./category.model";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[]
}

export type ProductCart = Product & {
    quantity: number;
};