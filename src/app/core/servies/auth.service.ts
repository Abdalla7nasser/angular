
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {Observable} from 'rxjs'

HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient){ }
  userInfo:any;

  basurl:string= `https://ecommerce.routemisr.com/api/v1/auth/`

regust(userDate:object):Observable<any>{
return this._HttpClient.post( this.basurl + 'signup',userDate)
}


login(userDate:object):Observable<any>{
  return this._HttpClient.post( this.basurl + 'signin',userDate)
  }


  decode():void{
    const encode = localStorage.getItem('etook')
    if (encode !== null) {
      const sscode = jwtDecode(encode)
      this.userInfo = sscode
      console.log(sscode);
      
    }
  }
}
