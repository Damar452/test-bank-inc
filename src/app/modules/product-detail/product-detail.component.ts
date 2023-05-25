import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/bussiness/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product!: Product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.getProductDetail();
  }

  private getProductDetail() {
    const routeId = this.activatedRoute.snapshot.params['id'];
    this.productsService.getProductbyId(routeId).subscribe( product => {
      this.product = product;
      console.log(product)
    })
  }



}
