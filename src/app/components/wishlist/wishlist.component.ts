import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WashlistService } from 'src/app/core/servies/washlist.service';
import { Product1 } from 'src/app/core/interface/product1';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/servies/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe ],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
 constructor(private _WashlistService:WashlistService ,private _ToastrService:ToastrService, private _Renderer2:Renderer2, private _CartService:CartService){}

 productwsh:Product1[]=[]

 wishProo:any = null


 wishdata:string[]=[]
 ngOnInit(): void {
   this._WashlistService.getwishlis().subscribe({
    next:(eret)=>{
      console.log( 'w1',eret);
       this.productwsh = eret.data
       this.wishProo = eret.data
       const newDate = eret.data.map( (rtytr:any)=> rtytr._id )
         console.log('new',newDate);
         this.wishdata = newDate
    }
   })
 }

 wisssh(wid:any):void{
  this._WashlistService.addwishlis(wid).subscribe({
    next:(wwwwsh)=>{
      console.log(wwwwsh);
      this._ToastrService.success(wwwwsh.message)
      this.wishdata = wwwwsh.data
    }

  })
}

removwish(remmo:any):void{
  this._WashlistService.removewishlis(remmo).subscribe({
    next:(qqw)=>{
      console.log(qqw);
      this._ToastrService.success(qqw.message)
      this.wishdata = qqw.data
      this._WashlistService.getwishlis().subscribe({
        next:(eret)=>{
          this.productwsh = eret.data
        }
      })
    }
  })
}

addproot(id:any , elemant:HTMLButtonElement):void{

  this._Renderer2.setAttribute( elemant, 'disabled', 'true')
  this._CartService.addcart(id).subscribe({
    next:(cartt)=>{
      console.log(cartt);
      this._ToastrService.success(cartt.message)
      this._Renderer2.removeAttribute( elemant, 'disabled')
      this._CartService.cartnumber.next(cartt.numOfCartItems)
    },
    error:(err)=>{
      this._Renderer2.removeAttribute( elemant, 'disabled')
    }
  })
  }
}

