import { Component } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'about-component',
    templateUrl: './about.component.html'
})

export class AboutComponent {

 constructor(
        private location: Location
    ){}

     goBack(): void {
      this.location.back();
    }
}