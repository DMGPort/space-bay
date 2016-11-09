import { Component } from '@angular/core';
import { Router }   from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'checkout-component',
    templateUrl: './checkout.component.html'
})

export class CheckOutComponent {

 constructor(
        private router : Router
    ){}

     checkOut(): void {
      this.router.navigate(['/list']);
    }
}