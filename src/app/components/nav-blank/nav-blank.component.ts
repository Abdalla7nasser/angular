import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/servies/cart.service';
import { WashlistService } from 'src/app/core/servies/washlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  constructor(private _Router:Router, private _CartService:CartService ,private _Renderer2:Renderer2 ,private _WashlistService:WashlistService){}

  @ViewChild('navvvb') navElam!:ElementRef

  @HostListener('window:scroll') 
  onscroll():void{
   if (scrollY >500) {
    this._Renderer2.addClass( this.navElam.nativeElement, 'px-5');

   }else
   this._Renderer2.removeClass( this.navElam.nativeElement, 'px-5');
 
  }

  numb:number=0;
  numw:number=0
ngOnInit(): void {
  this._CartService.cartnumber.subscribe({
    next:(unmber)=>{
      console.log(unmber);
      this.numb =unmber
    }
  })

  this._CartService.getcart().subscribe({
    next:(fff)=>{
      console.log(fff);
      this.numb = fff.numOfCartItems
    }
  })


  //wish
  this._WashlistService.wishnumber.subscribe({
    next:(wiuu)=>{
      console.log( wiuu);
      
    }
  })

  this._WashlistService.getwishlis().subscribe({
    next:(fff)=>{
      console.log('nummmb2',fff);
      this.numw = fff.count
    }
  })
  
}
  
  SignOut():void{
    localStorage.removeItem('etook')
    this._Router.navigate(['/login'])
  }

}
