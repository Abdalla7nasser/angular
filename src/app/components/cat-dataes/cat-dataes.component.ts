import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProudectService } from 'src/app/core/servies/proudect.service';
import { Catoogory } from 'src/app/core/interface/catoogory';

@Component({
  selector: 'app-cat-dataes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-dataes.component.html',
  styleUrls: ['./cat-dataes.component.scss']
})
export class CatDataesComponent implements OnInit {

  constructor( private _ActivatedRoute:ActivatedRoute,private _ProudectService:ProudectService){}

  catId:any;
  catdatel:Catoogory={
    name: '',
    image: ''
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(paroo)=>{
      this.catId=  paroo.get('id')
      }
    })

    this._ProudectService.getcatagordatels(this.catId).subscribe({
      next:(cass)=>{
        console.log(cass);
        this.catdatel= cass.data
      }
    })

    

   
  }


}
