import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService1 }  from './store-service/in-memory-data.service';
import './rxjs-extensions';

import { AppComponent }         from './app.component';
import { MainComponent }         from './main/main.component';
import { ItemSearchComponent }    from './search/item-search.component';
import { StoreListComponent }         from './store-list/store-list.component';
import { StoreGridComponent }         from './store-grid/store-grid.component';
import { DetailComponent }        from './detail/detail.component';
import { AdminComponent }         from './admin/admin.component';
import { EditComponent }        from './edit/edit.component';
import { CheckOutComponent }        from './checkout/checkout.component';
import { AboutComponent }        from './about/about.component';
import { PopularComponent }        from './popular/popular.component';

import { BasketComponent }        from './basket/basket.component';

import { StoreService }           from './store-service/store.service';
import { BasketService }           from './store-service/basket.service';
import { StoreRoutingModule }     from './store-service/store-routing.module';
import { OrderByPipe }              from './store-service/order-by.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService1),
  

  ],
  declarations: [
    AppComponent,
    MainComponent,
    ItemSearchComponent,
    StoreListComponent,
    StoreGridComponent,
    DetailComponent,
    AdminComponent,
    EditComponent,
    CheckOutComponent,
    AboutComponent,
    PopularComponent,

    BasketComponent,

    OrderByPipe

  ],
  providers: [ StoreService, BasketService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
