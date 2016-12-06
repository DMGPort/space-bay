import {Pipe, PipeTransform} from '@angular/core';
import { Item } from './item';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

    transform(input:Item , args:string[]) : any {

    console.log(input);
    return input;
    }
    
}