import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/bussiness/categories/categories.service';
import { loadProductsByCategory, loadProductsByTitle } from 'src/app/state/actions/products.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLastAction } from 'src/app/state/selectors/products.selectors';
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
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getShippingQuantity();
    this.getCategories();
  }

  public goToByUrl(url: string) {
    this.router.navigate([url])
  }

  public onSearch() {
    if(this.searchForm.valid) {
      const text = this.searchForm.get('searchText')!.value;
      this.getProductsByTitle(text);
    }
  }

  public onClear() {
    this.getProductsByTitle();
  }

  public getProductsBycategory(id:number) {
    this.categorySelected = id;
    this.store.dispatch(loadProductsByCategory({id, offset: 0}));
    this.router.navigate(['/']);
  }

  private getProductsByTitle(text: string = '') {
    this.categorySelected = 0;
    this.store.dispatch(loadProductsByTitle({title: text, offset: 0}))
  }

  private getShippingQuantity() {
    this.shippingCartQuantity$ = this.store.select(selectTotalProductsCart);
  }

  private getCategories() {
    this.categoriesService.getCategories().subscribe(({body}) => {
      this.categories = body!;
    });
  }

  private initializeForm() {
    this.searchForm = this.formBuilder.group({
      searchText: ['', Validators.required]
    });
  }
}

