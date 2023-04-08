import { Component } from '@angular/core';
import { ProductService } from '../product.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  selectedProduct:any[] =[]
   Product = [
    { name: 'Hydrogen', price: 50, count:1},
    { name: 'Helium', price: 20, count:1},
    { name: 'Lithium', price: 10, count:1},
    { name: 'Beryllium', price: 20, count:1},
    { name: 'Boron', price: 25, count:1},
    
  ];

  constructor(private productservice: ProductService, ){

  }

  ngOnInit(){

  }


  
  addToKart(product:any){

    this.selectedProduct.push(product)
    // this.productservice.addToCart(product)
    // console.log("hgfdshcgjs")
  }


  viewCart(){
    this.productservice.addToCart(this.selectedProduct)

    
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
