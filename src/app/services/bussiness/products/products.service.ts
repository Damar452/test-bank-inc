import { HttpClient, HttpResponse } from '@angular/common/http';
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

  public getProducts(offset: number): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.api+`?offset=${offset}&limit=10`, { observe: 'response' });
  }

  public getProductbyId(id: string): Observable<ProductCart>  {
    return this.http.get<ProductCart>(this.api + `/${id}`);
  }

  public getProductByTitle(title: string, offset: number): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.api + `?title=${title}&offset=${offset}&limit=10`, { observe: 'response' });
  }

  public getProductsByCategory(categoryId: number, offset: number): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(this.api + `?categoryId=${categoryId}&offset=${offset}&limit=10`, { observe: 'response' });
  }
}
