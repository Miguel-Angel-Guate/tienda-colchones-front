import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getMattresses():Observable<any>{
    return this.httpClient.get<object[]>(environment.API_URL+'/products/colchones')
  }
  getBeds():Observable<any>{
    return this.httpClient.get<object[]>(environment.API_URL+'/products/somieres')
  }
}
