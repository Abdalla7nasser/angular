import { Pipe, PipeTransform } from '@angular/core';
import { Product1 } from '../interface/product1';

@Pipe({
  name: 'searchjj',
  standalone: true
})
export class SearchjjPipe implements PipeTransform {

  transform(prodeact:Product1[] , termmn:string):Product1[] {
    return prodeact.filter( (ity)=>ity.title.toLocaleLowerCase().includes(termmn.toLocaleLowerCase()));
  }

}
