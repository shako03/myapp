import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { DetailsComponent } from '../details/details.component';
import { BasketService } from 'src/app/servisebi/basket.service';
import { ProxyService } from 'src/app/servisebi/proxy.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() card:any
constructor(private matDialog:MatDialog,private basketService:BasketService){}



addCardInBasket():void{
this.basketService.addCardInBasket(this.card)
}



seeDetails(){
  const modal = this.matDialog.open(DetailsComponent, {
    data:this.card,
    width:'90%',
    height:'90%',
    


  } )



modal.afterClosed()
.subscribe((res) => {
  console.log(res)
})
}
hoverStar(card: any, value: number) {
  console.log(`Hovered star ${value} for card ${card.id}`);
}

resetStar(card: any) {
  console.log(`Reset stars for card ${card.id}`);
}
addNewProduct() {
}
}
