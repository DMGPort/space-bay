import { Component } from '@angular/core';
import { Router }   from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'main-component',
    templateUrl: './main.component.html'
})

export class MainComponent {

 constructor(
        private router : Router,
    ){}

    password: string = "";

    passwordCheck(){
        if(this.password == "admin"){
            this.router.navigate(['/admin']);
            this.password = "";
        }
         this.password = "";
    }

    backgroundLink: string = "";

    backgroundToggle(){
        if ( this.backgroundLink == ""){
            this.backgroundLink = "app/img/backgr.jpg";
        }
        else if(this.backgroundLink == "app/img/backgr.jpg"){
              this.backgroundLink = "app/img/backgr1.jpg";
        }
        else if(this.backgroundLink == "app/img/backgr1.jpg"){
              this.backgroundLink = "";
        }
    }
}

