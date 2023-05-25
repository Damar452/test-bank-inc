import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductCart } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private api = environment.api + '/products'

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.api+'?offset=0&limit=10');
  }

  public getProductbyId(id: string): Observable<ProductCart>  {
    return this.http.get<ProductCart>(this.api + `/${id}`);
  }

  public getProductByTitle(title: string): Observable<Product[]> {
    console.log(title)
    return this.http.get<Product[]>(this.api + `?title=${title}&offset=0&limit=10`);
  }

  public getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.api + `?categoryId=${categoryId}&offset=0&limit=10`);
  }
}
