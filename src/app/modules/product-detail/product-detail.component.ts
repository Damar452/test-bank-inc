import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductCart } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/bussiness/products/products.service';
import { addProduct, removeProduct } from 'src/app/state/actions/shipping-cart.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product!: ProductCart;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  public saveProductCart(product: ProductCart){
    this.store.dispatch(addProduct({product}));
  }

  private getProductDetail() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    this.productsService.getProductbyId(routeId).subscribe( product => {
      this.product = product as ProductCart;
    })
  }

  public removeProduct(id: number) {
    this.store.dispatch(removeProduct({id}));
  }
}
