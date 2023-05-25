import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/bussiness/categories/categories.service';
import { loadProductsByCategory, loadProductsByTitle } from 'src/app/state/actions/products.actions';
import { selectTotalProductsCart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public shippingCartQuantity$: Observable<any> = new Observable();
  public categories: Category[] = [];
  public categorySelected!: number;

  public searchForm!: FormGroup;

  constructor(
    private router: Router,
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getShippingQuantity();
    this.getCategories();
  }

  public goToCartDetail() {
    this.router.navigate(['/cart-detail'])
  }

  public onSearch() {
    if(this.searchForm.valid) {
      const text = this.searchForm.get('searchText')!.value;
      this.getProducts(text);
    }
  }

  public onClear() {
    this.getProducts();
  }

  public getProductsBycategory(id:number) {
    this.categorySelected = id;
    this.store.dispatch(loadProductsByCategory({id}))
  }

  private getProducts(text: string = '') {
    this.categorySelected = 0;
    this.store.dispatch(loadProductsByTitle({title: text}))
  }

  private getShippingQuantity() {
    this.shippingCartQuantity$ = this.store.select(selectTotalProductsCart);
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe(categoriesList => {
      this.categories = categoriesList;
    });
  }

  private initializeForm() {
    this.searchForm = this.formBuilder.group({
      searchText: ['', Validators.required]
    });
  }
}

