import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
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

  public getProductbyId(id: string): Observable<Product>  {
    return this.http.get<Product>(this.api + `/${id}`);
  }
}
