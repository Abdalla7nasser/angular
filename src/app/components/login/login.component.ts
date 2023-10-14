import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl,FormGroup ,ReactiveFormsModule,Validators, FormControlOptions } from '@angular/forms';
import { AuthService } from 'src/app/core/servies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  erroMas:string='';
  isloding:boolean= false;


  constructor(private _AuthService:AuthService, private _Router:Router){}
  loginform:FormGroup= new FormGroup({
   
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)),
   

  } )

  
  handelform():void{

    const userDate= this.loginform.value;
    this.isloding = true;
    if (this.loginform.valid === true) {
      this._AuthService.login(userDate).subscribe({
        next:(repoo)=>{
          console.log(repoo);

          if (repoo.message =='success') {

            localStorage.setItem('etook',repoo.token)
            this._AuthService.decode()
            this.isloding = false;
            this._Router.navigate(['/home'])
          }
        },
        error:(errro)=>{
          console.log(errro);
          this.erroMas = errro.error.message;
          this.isloding = false;
          
        },
        
      })
    }
  }

}
