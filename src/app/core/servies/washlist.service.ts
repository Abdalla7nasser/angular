import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WashlistService {


  basurjw:string = `https://ecommerce.routemisr.com/api/v1/`

  wishnumber :BehaviorSubject<number> = new BehaviorSubject(0) ;

  constructor( private _HttpClient:HttpClient) { }

  addwishlis( wishId:string):Observable<any>{
    return this._HttpClient.post(this.basurjw + `wishlist`,
    {
      productId: wishId
  }
    )
  }


  getwishlis( ):Observable<any>{
    return this._HttpClient.get(this.basurjw + `wishlist`)
  }


  removewishlis(remwish:any ):Observable<any>{
    return this._HttpClient.delete(this.basurjw + `wishlist/${remwish}`)
  }

}
