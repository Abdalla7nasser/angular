import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProudectService {

  constructor(private _HttpClient:HttpClient) { }

  baseurl:string= `https://ecommerce.routemisr.com/api/v1/`

  getprodect(pagenum:number =1):Observable<any>{
    return this._HttpClient.get(this.baseurl + `products?page=${pagenum}`)
  }

  getcatagor():Observable<any>{
    return this._HttpClient.get(this.baseurl + 'categories')
  }

  getcatagordatels(catid:string):Observable<any>{
    return this._HttpClient.get(this.baseurl + `categories/${catid}`)
  }

  

  getdatels(id:string|null):Observable<any>{
    return this._HttpClient.get(this.baseurl + `products/${id}`)
  }



 
}
