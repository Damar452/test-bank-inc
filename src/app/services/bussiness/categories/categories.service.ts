import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private api = environment.api + '/categories'

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<HttpResponse<Category[]>>   {
    return this.http.get<Category[]>(this.api, { observe: 'response' });
  }
}
