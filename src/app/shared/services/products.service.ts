import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL : string = environment.BASE_URL;
  PRODUCTS_URL : string = `${this.BASE_URL}/products`
  constructor(
    private _HTTP : HttpClient
  ) { }

  fetchAllData():Observable<any>{
    return this._HTTP.get(this.PRODUCTS_URL)
  }
}
