import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../product.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



@Component({
  selector: 'app-addtokart-component',
  templateUrl: './addtokart.component.html',
  styleUrls: ['./addtokart.component.css']
})
export class AddTOkartComponent {
  
  cartItem:any=[];
  count=1
  constructor(private productservice : ProductService){

  }

  ngOnInit(){

    
      
    
    this.productservice.getItem().subscribe(data => {
      // console.log(data);
      this.cartItem = data
      
    });
    console.log("item",this.productservice.getItem());
  }




  addCount(i:any){
    this.cartItem[i].count++
    this.cartItem[i].price = (this.cartItem[i].price ) *  this.cartItem[i].count

    console.log(this.cartItem[i].price);

  }

  minusCount(i:any){
    this.cartItem[i].count--
    this.cartItem[i].price = (this.cartItem[i].price ) *  this.cartItem[i].count

    console.log(this.cartItem[1]);
    
  }
}
