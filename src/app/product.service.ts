import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private data = new BehaviorSubject<any>([]);

  

    addToCart(product:any){

    console.log(product);
    
       this.data.next(product);

        
    }
    
    getItem(){
        console.log(this.data);
        return this.data.asObservable();
    }

    clearCart(){
       
    }


}
