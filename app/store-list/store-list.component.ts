import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

import { StoreService } from '../store-service/store.service';
import { BasketService } from '../store-service/basket.service';
import { Item }        from '../store-service/item';


@Component({
    moduleId: module.id,
    selector: 'store-list',
    templateUrl: 'store-list.component.html'
})
export class StoreListComponent implements OnInit{ 

    items: Item[];
    selectedItem: Item;
    item: Item;
    numberOfItems = 0;
    totalPrice = 0;


    constructor(
        private storeService : StoreService,
        private basketService : BasketService,
        private router : Router
    ){}
    
    ngOnInit(): void {
        this.getTotalNumberOfItems();
        this.getTotalPrice();
        this.storeService.getItems()
        .then(k => this.items = k)
    }
    onSelect(item: Item): void {
        this.selectedItem = item;
        item.views += 1;
        this.storeService.update(item);
        this.router.navigate(['/detail', this.selectedItem.id]);
    }
    buy(item){
        this.selectedItem = item;
        this.basketService.addToBasket(item);
        this.getTotalNumberOfItems();
        this.getTotalPrice();
    }
    viewBasket(): void {
        this.router.navigate(['/basket']);
    }
    getTotalPrice(){
        this.totalPrice = this.basketService.totalPrice;
    }
    getTotalNumberOfItems(){
        this.numberOfItems = this.basketService.numberOfItems;
    }

}
