import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { selectTotalProductsCart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() categories: Category[] = [];
  public shippingCartQuantity$: Observable<any> = new Observable();

  constructor(
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getShippingQuantity();
  }

  public goToCartDetail() {
    this.router.navigate(['/cart-detail'])
  }

  private getShippingQuantity() {
    this.shippingCartQuantity$ = this.store.select(selectTotalProductsCart);
  }

}
