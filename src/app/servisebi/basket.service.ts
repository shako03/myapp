import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/servisebi/proxy.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
basketArray:Array<any> = [];
addCardInBasketEmmiter:EventEmitter<any> = new EventEmitter();
deleteCardEmitter:EventEmitter<any> = new EventEmitter();
constructor(private proxyService: ProxyService) { }

addCardInBasket(card:any){
let findCard = this.basketArray.find((cardd) => {
  return cardd.id == card.id
})


if(findCard){
  alert('ნივთი უკვე დამატებულია კალათაში')
}else{
   this.basketArray.push(card)
   this.addCardInBasketEmmiter.emit(this.basketArray)
   this.proxyService.addCart(card).subscribe();
}
}






deleteCardFromBasket(cardId:number){

this.basketArray = this.basketArray.filter((card) => {
  return card.id != cardId
})
console.log(this.basketArray)
this.deleteCardEmitter.emit(this.basketArray)



} 
}








