import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/servies/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService ,private _Renderer2:Renderer2){}

  cartProo:any = null

  //get cart
  ngOnInit(): void {
    this._CartService.getcart().subscribe({
      next:(cartrepoo)=>{
        console.log(cartrepoo.data);
        this.cartProo = cartrepoo.data;
      }
    })
  }

//remove cart
  removcart(removeid2:string, element:HTMLButtonElement):void{

    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.removecart(removeid2).subscribe({
      next:(remoove)=>{
        console.log(remoove);
        this.cartProo = remoove.data
        this._Renderer2.removeAttribute(element, 'disabled')

        this._CartService.cartnumber.next(remoove.numOfCartItems)
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(element, 'disabled')
      }
    })
  }

  //updet cart
  changbtn( count:number,idcart:string,el1:HTMLButtonElement,el2:HTMLButtonElement ):void{
    if (count>=1) {

      this._Renderer2.setAttribute(el1, 'disabled', 'true'),
      this._Renderer2.setAttribute(el2, 'disabled', 'true')
      this._CartService.updetcart(idcart, count).subscribe({
        next:(up)=>{
          this.cartProo = up.data
          this._Renderer2.removeAttribute(el1, 'disabled'),
           this._Renderer2.removeAttribute(el2, 'disabled')
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(el1, 'disabled'),
           this._Renderer2.removeAttribute(el2, 'disabled')
        }
      })
    }
    
 
  }

  //clear

  clear():void{
    this._CartService.clearcart().subscribe({
      next:(cler)=>{
        console.log(cler);
        if (cler.message === "success") {
          this.cartProo = null
          this._CartService.cartnumber.next(0)
        }
      }
    })
  }


}
