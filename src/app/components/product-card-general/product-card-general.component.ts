import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product, ProductCart } from 'src/app/models/product.model';
import { AppState } from 'src/app/state/app.state';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-product-card-general',
  templateUrl: './product-card-general.component.html',
  styleUrls: ['./product-card-general.component.scss']
})
export class ProductCardGeneralComponent implements OnInit {

  @Input() product!: ProductCart;
  @Input() isCartView: boolean = false;
  @Output() onClickImage = new EventEmitter<number>();
  @Output() onSaveInCart = new EventEmitter<ProductCart>();
  @Output() onRemoveProduct = new EventEmitter<number>();

  public isShippingCart!: ProductCart | undefined;

  public articlesQuantity!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    !this.isCartView && this.getShippingCart();
    this.articlesQuantity = this.isCartView ? this.product.quantity : 1;
  }

  get total(){
    return this.product.price * this.articlesQuantity
  }

  public clickImage(id: number) {
    this.onClickImage.emit(id)
  }

  public addCounter() {
    this.articlesQuantity++;
  }

  public substract() {
    this.articlesQuantity > 1 && this.articlesQuantity--;
  }

  public saveCart() {
    this.onSaveInCart.emit({ ...this.product, quantity: this.articlesQuantity});
    if(!this.isCartView) this.articlesQuantity = 1;
  }

  public removeProduct() {
    this.onRemoveProduct.emit(this.product.id);
  }


  private getShippingCart() {
    this.store.select(selectProductscart).subscribe( products => {
      this.isShippingCart = products.find((product: ProductCart) => product.id === this.product.id)      
    })
  }

}
