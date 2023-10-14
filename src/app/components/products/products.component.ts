import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProudectService } from 'src/app/core/servies/proudect.service';
import { Product1 } from 'src/app/core/interface/product1';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/servies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink,CuttextPipe, NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private _ProudectService:ProudectService,private _CartService:CartService,private _ToastrService:ToastrService, private _Renderer2:Renderer2){}

      // product2:any []= [].data.metadata
  product2:Product1[]=[]
  pageSize:number =0
  pprod:number =0
  total:number =0

ngOnInit(): void {
  this._ProudectService.getprodect().subscribe({
    next:(prrro)=>{
      console.log(prrro);
      this.product2 = prrro.data
      this.pageSize = prrro.metadata.limit
      this.pprod = prrro.metadata.currentPage
      this.total = prrro.results
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

  pageChanged(event:any):void{
    this._ProudectService.getprodect(event).subscribe({
      next:(prrro)=>{
        console.log(prrro);
        this.product2 = prrro.data
        this.pageSize = prrro.metadata.limit
        this.pprod = prrro.metadata.currentPage
        this.total = prrro.results
      }
    })
    
  }

}
