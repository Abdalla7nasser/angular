import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
 
  basurl:string= `https://ecommerce.routemisr.com/api/v1/`
  
  cartnumber :BehaviorSubject<number> = new BehaviorSubject(0) ;

  //token
  

  //post api to datels
  addcart(prood:string):Observable<any>{
    return this._HttpClient.post(this.basurl + `cart` ,
    {
      productId: prood
  },
  
    )
  }

  //get api to cart 
  getcart():Observable<any>{
    return this._HttpClient.get(this.basurl + `cart`
    
    )
  }
  //remove cart
  removecart(idremove:string):Observable<any>{
    return this._HttpClient.delete(this.basurl + `cart/${idremove}`
    
    )
  }

  //updet
  updetcart(idup:string, countcart:number):Observable<any>{
    return this._HttpClient.put(this.basurl + `cart/${idup}`,
    {
      count: countcart
  }
    )
  }

  //clearcart
  clearcart():Observable<any>{
    return this._HttpClient.delete(this.basurl + `cart`
   )
  }

  //payment

  chack(chackid:string,order:object):Observable<any>{
    return this._HttpClient.post(this.basurl + `orders/checkout-session/${chackid}?url=http://localhost:4200`,
     
    {
      shippingAddress: order
  }


    )
  }
}
