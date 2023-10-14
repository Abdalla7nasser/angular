import { WashlistService } from 'src/app/core/servies/washlist.service';


import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Catoogory } from 'src/app/core/interface/catoogory';
import { Product1 } from 'src/app/core/interface/product1';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { SearchjjPipe } from 'src/app/core/pipe/searchjj.pipe';
import { CartService } from 'src/app/core/servies/cart.service';
import { ProudectService } from 'src/app/core/servies/proudect.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CuttextPipe,CarouselModule,RouterLink, SearchjjPipe ,FormsModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

constructor(private _ProudectService:ProudectService,private _CartService:CartService,private _ToastrService:ToastrService, private _Renderer2:Renderer2,private _WashlistService:WashlistService){}


product1:Product1[]=[]
ctogory:Catoogory[]=[]

wishdata:string[]=[]

//search
termmo:string=''

  ngOnInit(): void {



    this._ProudectService.getprodect().subscribe({
      next:(prooo)=>{
        console.log('prodect',prooo.data);
        this.product1 = prooo.data
      }
    })

    this._ProudectService.getcatagor().subscribe({
      next:(prooo1)=>{
        console.log('cat', prooo1.data);
        this.ctogory = prooo1.data
      }
    })

    this._WashlistService.getwishlis().subscribe({
      next:(wqweq)=>{
        console.log('wishh', wqweq.data);
        
        const newDate = wqweq.data.map( (rtytr:any)=> rtytr._id )
        console.log('new',newDate);
        this.wishdata = newDate
        
      }
    })

  }

  //cart
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

//slider
  catOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items:4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }


  cat2Options: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    nav: false
  }


  //wishlist

//addwish
  wisssh(wid:any):void{
    this._WashlistService.addwishlis(wid).subscribe({
      next:(wwwwsh)=>{
        console.log(wwwwsh);
        this._ToastrService.success(wwwwsh.message)
        this.wishdata = wwwwsh.data
        this._WashlistService.wishnumber.next(wwwwsh.numOfCartItems)
      }

    })
  }
  removwish(remmo:any):void{
    this._WashlistService.removewishlis(remmo).subscribe({
      next:(qqw)=>{
        console.log(qqw);
        this._ToastrService.success(qqw.message)
        this.wishdata = qqw.data
      }
    })
  }

}
