import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl,FormGroup ,ReactiveFormsModule,Validators, FormControlOptions } from '@angular/forms';
import { AuthService } from 'src/app/core/servies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  erroMas:string='';
  isloding:boolean= false;


  constructor(private _AuthService:AuthService, private _Router:Router){}
  registerForm:FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)),
    rePassword:new FormControl(''),
    phone :new FormControl('',Validators.pattern(/^01[0125][0-9]{8}$/))

  }, {validators:[this.confermpassword]} as FormControlOptions )

  confermpassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if ( rePassword?.value == '') {
      rePassword?.setErrors( { required:true })
    }

    if (password?.value != rePassword?.value) {
      rePassword?.setErrors( { mismatch:true })
    }
  }

  handelform():void{

    const userDate= this.registerForm.value;
    this.isloding = true;
    if (this.registerForm.valid === true) {
      this._AuthService.regust(userDate).subscribe({
        next:(repoo)=>{
          console.log(repoo);

          if (repoo.message =='success') {
            this.isloding = false;
            this._Router.navigate(['/login'])
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
