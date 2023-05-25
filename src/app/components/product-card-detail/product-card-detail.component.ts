import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product, ProductCart } from 'src/app/models/product.model';
import { AppState } from 'src/app/state/app.state';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.scss']
})
export class ProductCardDetailComponent implements OnInit {

  @Input() product!: ProductCart;

  @Output() onSaveInCart = new EventEmitter<ProductCart>();
  @Output() onRemoveProduct = new EventEmitter<number>();

  public articlesQuantity!: number;

  public isShippingCart!: ProductCart | undefined;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getShippingCart();
  }

  public addCounter() {
    this.articlesQuantity++;
  }

  public substract() {
    this.articlesQuantity > 1 && this.articlesQuantity--;
  }

  public saveCart() {
    this.onSaveInCart.emit({ ...this.product, quantity: this.articlesQuantity });
  }

  public removeProduct() {
    this.onRemoveProduct.emit(this.product.id);
  }

  public goToPrincipal() {
    this.router.navigate(['/'])
  }

  private getShippingCart() {
    this.store.select(selectProductscart).subscribe(products => {
      this.isShippingCart = products.find((product: ProductCart) => product.id === this.product?.id)
      this.articlesQuantity = this.isShippingCart?.quantity || 1;
    })
  }

}
