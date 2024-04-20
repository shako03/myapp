import {Component , OnInit} from '@angular/core';
import { BasketService } from 'src/app/servisebi/basket.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector:'app-basket',
  templateUrl: './basket.component.html',
  styleUrls:['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!:Array<any>


  constructor(private basketService:BasketService){}
    ngOnInit():void  {
    this.dataSource = this.basketService.basketArray

    this.basketService.deleteCardEmitter.subscribe((newArray) => {
      console.log(newArray)
      this.dataSource = newArray;
    })
    }
      deleteCard(cardId:number){
        this.basketService.deleteCardFromBasket(cardId)

     }
}




