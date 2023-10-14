import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from 'src/app/core/servies/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  constructor( private _ActivatedRoute:ActivatedRoute, private _CartService:CartService){}

  paymentid:any =''


  paymform: FormGroup = new FormGroup({
    details:new FormControl(''),
    phone:new FormControl(''),
    city:new FormControl(''),
  })

  pumhand():void{
    this._CartService.chack(this.paymentid, this.paymform.value).subscribe({
      next:(pppppy)=>{
        console.log(pppppy);
        if (pppppy.status == 'success') {
          window.open(pppppy.session.url)
        }
       
      }
    })
    
    
  }


   ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
      next:(paymennt)=>{
        
        this.paymentid = paymennt.get('id')
        console.log(this.paymentid );
        
      }
     })
   }
}
