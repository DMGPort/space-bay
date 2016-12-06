import {Pipe, PipeTransform} from '@angular/core';
import { Item } from './item';

@Pipe({
    name: 'orderBy'

})
export class OrderByPipe implements PipeTransform {

    transform(array: Item[]){
        if(Array.isArray(array)){
            for(let x = 0;x < array.length; x++){
                array.sort(function (a, b) {
                    if (a.views > b.views) {
                        return -1;
                    }
                    if (a.views < b.views) {
                        return 1;
                    }
                    return 0;
                    });
                }
        }
        return array;
    }
    
}