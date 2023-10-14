import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoodingInterceptor } from './looding.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS ,useClass: MyhttpInterceptor, multi:true},
    { provide:HTTP_INTERCEPTORS ,useClass: LoodingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
