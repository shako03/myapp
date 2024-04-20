import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
basketArray:Array<any> = [];
addCardInBasketEmmiter:EventEmitter<any> = new EventEmitter();
deleteCardEmitter:EventEmitter<any> = new EventEmitter();

addCardInBasket(card:any){
let findCard = this.basketArray.find((cardd) => {
  return cardd.id == card.id
})

if(findCard){
  alert('ნივთი უკვე დამატებულია კალათაში')
}else{
  this.basketArray.push(card)
  this.addCardInBasketEmmiter.emit(this.basketArray)
}
}





deleteCardFromBasket(cardId:number){

this.basketArray = this.basketArray.filter((card) => {
  return card.id != cardId
})
console.log(this.basketArray)
this.deleteCardEmitter.emit(this.basketArray)



} 
  constructor() { }
}
