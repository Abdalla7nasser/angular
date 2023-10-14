import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProudectService } from 'src/app/core/servies/proudect.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/servies/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datels',
  standalone: true,
  imports: [CommonModule,CarouselModule ],
  templateUrl: './datels.component.html',
  styleUrls: ['./datels.component.scss']
})
export class DatelsComponent implements OnInit {


constructor(private _ActivatedRoute:ActivatedRoute ,private _ProudectService:ProudectService ,private _Renderer2:Renderer2,private _CartService:CartService,private _ToastrService:ToastrService){

}
//id
prodectDatels!:string|null;

//iddata
prodectDooo:any=null;

ngOnInit(): void {

  //idprodect
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
    this.prodectDatels = params.get('id');
      console.log(this.prodectDatels);
      
    }
  })

//id data
this._ProudectService.getdatels(this.prodectDatels).subscribe({
  next:(datelsid)=>{
    console.log(datelsid.data);
    this.prodectDooo =datelsid.data
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
  

datalsOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: false
}
}
