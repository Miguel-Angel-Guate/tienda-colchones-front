import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OurmattressService {
  public ourmattress: object[];

  constructor(public httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get('API_URL/products');
  }
  setOurmattress(ourmattress):void{
    this.ourmattress=ourmattress;
  }
}
