"use strict";(self.webpackChunkfresh=self.webpackChunkfresh||[]).push([[927],{1927:(x,d,r)=>{r.r(d),r.d(d,{DatelsComponent:()=>v});var i=r(6814),c=r(756),t=r(4769),l=r(1120),p=r(1923),u=r(2759),g=r(2425);function m(o,_){if(1&o&&t._UZ(0,"img",15),2&o){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(o,_){if(1&o&&(t.ynx(0),t.YNc(1,m,1,1,"ng-template",14),t.BQk()),2&o){const e=_.$implicit;t.xp6(1),t.Q6J("id",e.id)}}function h(o,_){if(1&o){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,1,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h3",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"SPan"),t._UZ(18,"i",11),t._uU(19),t.qZA()()(),t.TgZ(20,"footer")(21,"button",12,13),t.NdJ("click",function(){t.CHM(e);const n=t.MAs(22),a=t.oxw();return t.KtG(a.addproot(a.prodectDooo._id,n))}),t._uU(23,"+Add To Cart"),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("options",e.datalsOptions),t.xp6(1),t.Q6J("ngForOf",e.prodectDooo.images),t.xp6(4),t.Oqu(e.prodectDooo.title),t.xp6(2),t.Oqu(e.prodectDooo.description),t.xp6(2),t.Oqu(e.prodectDooo.category.name),t.xp6(3),t.Oqu(t.xi3(16,7,e.prodectDooo.price,"EGP")),t.xp6(4),t.hij(" ",e.prodectDooo.ratingsAverage," ")}}let v=(()=>{class o{constructor(e,s,n,a,f){this._ActivatedRoute=e,this._ProudectService=s,this._Renderer2=n,this._CartService=a,this._ToastrService=f,this.prodectDooo=null,this.datalsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.prodectDatels=e.get("id"),console.log(this.prodectDatels)}}),this._ProudectService.getdatels(this.prodectDatels).subscribe({next:e=>{console.log(e.data),this.prodectDooo=e.data}})}addproot(e,s){this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.addcart(e).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this._Renderer2.removeAttribute(s,"disabled"),this._CartService.cartnumber.next(n.numOfCartItems)},error:n=>{this._Renderer2.removeAttribute(s,"disabled")}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(l.gz),t.Y36(p.r),t.Y36(t.Qsj),t.Y36(u.N),t.Y36(g._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-datels"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-3 bg-main-light my-3",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-3","bg-main-light","my-3"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"h6"],[1,"text-muted"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small","text-muted"],[1,"fas","fa-star","rating-color"],[1,"main-btn","w-100",3,"click"],["addrt",""],["carouselSlide","",3,"id"],["alt","",3,"src"]],template:function(s,n){1&s&&t.YNc(0,h,24,10,"section",0),2&s&&t.Q6J("ngIf",n.prodectDooo)},dependencies:[i.ez,i.sg,i.O5,i.H9,c.bB,c.Fy,c.Mp]})}return o})()}}]);