import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class StoreService {

    private itemsUrl = 'app/inventory';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private sanitizer: DomSanitizer,
        private http: Http) { };
    

    getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => response.json().data as Item[])
               .catch(this.handleError);
  }
  
    getItem(id: number): Promise<Item> {
    return this.getItems()
               .then(k => k.find(item => item.id === id));
    }

    sanitizeUrl(youTubeCode: string) : SafeResourceUrl {
         let dangerousVideoUrl = 'https://www.youtube.com/embed/' + youTubeCode;
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    }
    

//-------------------------------Admin-------------------//

    lastId : number = 9;

    update(item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
      return this.http.put(url, JSON.stringify(item), {headers: this.headers})
        .toPromise()
        .then(() => item)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
      const url = `${this.itemsUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    
    //-------------------------------Create Item-------------------//

     create(name: string): Promise<Item> {
      return this.http
        .post(this.itemsUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
   

    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
    


    


}

 