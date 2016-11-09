import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { StoreService } from '../store-service/store.service';
import { BasketService } from '../store-service/basket.service';
import { Item }        from '../store-service/item';


@Component({
    moduleId: module.id,
    selector: 'popular',
    templateUrl: 'popular.component.html'
})
export class PopularComponent implements OnInit{ 

    items: Item[];
    selectedItem: Item;
      
    constructor(
        private storeService : StoreService,
        private router : Router
    ){}

    ngOnInit(): void {
        this.storeService.getItems()
        .then(k => this.items = k)  
    }



    onSelect(item: Item): void {
        this.selectedItem = item;
        item.views += 1;
        this.storeService.update(item);
        this.router.navigate(['/detail', this.selectedItem.id]);
   }

}
