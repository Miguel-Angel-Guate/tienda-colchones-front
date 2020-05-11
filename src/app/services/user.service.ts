import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root",
})
export class UserService {
  public user:User;
  constructor(private httpClient:HttpClient) {}
  login(credentials:object):Observable<any>{
    return this.httpClient.post(environment.FRONT_URL+'/users/login',credentials);
  }
  register(user:User):Observable<any>{
    return this.httpClient.post(environment.FRONT_URL+'/users/register',user);
  }
  setUser(user:User):void{
    this.user=user;
  }
}
