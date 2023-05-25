import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/app/models/product.model';
import { ExportDocumentService } from 'src/app/services/utilities/export-document/export-document.service';
import { GeneralModalService } from 'src/app/services/utilities/general-modal/general-modal.service';
import { editProductQuantity, emptyCart, removeProduct } from 'src/app/state/actions/shipping-cart.actions';
import { AppState } from 'src/app/state/app.state';
import { selectProductscart } from 'src/app/state/selectors/shipping-cart.selectors';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  public productsCartShipping!: ReadonlyArray<ProductCart>
  public totalItems: number = 0;
  public totalPriceItems: number = 0;
  public discounts: number = 0;
  public shipment: number = 0;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private exportDocumentService: ExportDocumentService,
    private generalModalService: GeneralModalService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.store.select(selectProductscart).subscribe(products => {
      this.productsCartShipping = products;
      this.totalItems = products.reduce((sum: number, product: ProductCart) => sum + product.quantity, 0)
      this.totalPriceItems = products.reduce((sum: number, product: ProductCart) => sum + (product.quantity * product.price), 0);
      this.discounts = this.totalPriceItems * 0.01;
      this.shipment = this.totalPriceItems * 0.02;
    })
  }

  public goToDetail(id: number) {
    this.router.navigate(['/product-detail', id])
  }

  public goToPrincipal() {
    this.router.navigate(['/'])
  }

  public removeProduct(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }

  public updateProductQuantity(product: ProductCart) {
    this.store.dispatch(editProductQuantity({ id: product.id, quantity: product.quantity }));
  }

  public resetShippingCart() {
    this.store.dispatch(emptyCart());
  }

  public exportCsv() {
    this.exportDocumentService.exportToCSV([...this.productsCartShipping], 'shipping-cart');
  }

  public exportExcel() {
      this.exportDocumentService.exportToXLS([...this.productsCartShipping], 'shipping-cart', 'hoja-1');
  }

  public onPay() {
    this.generalModalService.showModal(
      {
        title: 'Pago efectuado correctamente',
         message: 'Su pedido llegará en 3 días hábiles, muchas gracias por su compra'
      });
    this.resetShippingCart();
    this.goToPrincipal();
  }
}
