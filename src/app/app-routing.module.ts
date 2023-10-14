import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/gurd/auth.guard';

const routes: Routes = [

  //blank
  {path:'',canActivate:[authGuard], loadComponent:()=>import('./layout/blank-layout/blank-layout.component').then( (m)=>m.BlankLayoutComponent ) ,
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then( (m)=>m.HomeComponent ),title:'home'},
    {path:'payment/:id',loadComponent:()=>import('./components/payment/payment.component').then( (m)=>m.PaymentComponent ),title:'payment'},
    {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then( (m)=>m.BrandsComponent ),title:'brands'},
    {path:'datels/:id',loadComponent:()=>import('./components/datels/datels.component').then( (m)=>m.DatelsComponent ),title:'datels'},
    {path:'wishlist',loadComponent:()=>import('./components/wishlist/wishlist.component').then( (m)=>m.WishlistComponent ),title:'wishlist'},

    {path:'products',loadComponent:()=>import('./components/products/products.component').then( (m)=>m.ProductsComponent ),title:'products'},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then( (m)=>m.CartComponent ),title:'cart'},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then( (m)=>m.CategoriesComponent ),title:'categories'},
    {path:'catdataes/:id',loadComponent:()=>import('./components/cat-dataes/cat-dataes.component').then( (m)=>m.CatDataesComponent ),title:'categoriesDatels'},

  ]
},

//auth
{path:'',loadComponent:()=>import('./layout/auth-layout//auth-layout.component').then( (m)=>m.AuthLayoutComponent),
children:[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then( (m)=>m.LoginComponent ),title:'login'},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then( (m)=>m.RegisterComponent ),title:'register'},
]
},


//notfound
{path:"**",loadComponent:()=>import('./components/notfound/notfound.component').then( (m)=>m.NotfoundComponent ), title:'not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
