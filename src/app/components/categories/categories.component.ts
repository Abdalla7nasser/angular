import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProudectService } from 'src/app/core/servies/proudect.service';
import { Catoogory } from 'src/app/core/interface/catoogory';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _ProudectService:ProudectService){}

catFoor:Catoogory[] =[]


  ngOnInit(): void {
    this._ProudectService. getcatagor().subscribe({
      next:(cax)=>{
        console.log(cax.data);
        this.catFoor = cax.data;
      }
    })

    
  }
}
