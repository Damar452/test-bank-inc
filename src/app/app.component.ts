import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/bussiness/categories/categories.service';
import { Category } from './models/category.model';
import { ProductsService } from './services/bussiness/products/products.service';
import { Store } from '@ngrx/store';
import { loadProducts, loadedProducts } from './state/actions/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public categories: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe(categoriesList => {
      this.categories = categoriesList;
      console.log(this.categories)
    });
  }

  private getProducts() {
    this.store.dispatch(loadProducts())
    this.productsService.getProducts().subscribe( products => {
      console.log(products)
      this.store.dispatch(loadedProducts({
        products
      }))
    })
  }
}
