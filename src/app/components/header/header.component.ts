import { Component , OnInit } from '@angular/core';
import { BasketService } from 'src/app/servisebi/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
basketElementCount:number = 0;
constructor(private basketservice:BasketService){}
ngOnInit(): void {
  this.basketservice.addCardInBasketEmmiter.subscribe((array:Array<any>)=>{
    this.basketElementCount = array.length;
  })
  this.basketservice.deleteCardEmitter.subscribe((array:Array<any>)=>{
    this.basketElementCount = array.length;
  })
}
}
