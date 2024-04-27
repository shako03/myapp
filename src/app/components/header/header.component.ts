import { Component , OnInit } from '@angular/core';
import { BasketService } from 'src/app/servisebi/basket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
basketElementCount:number = 0;
constructor(private basketservice:BasketService){}
SearchText!:string
ngOnInit(): void {
  this.basketservice.addCardInBasketEmmiter.subscribe((array:Array<any>)=>{
    this.basketElementCount = array.length;
  })
  this.basketservice.deleteCardEmitter.subscribe((array:Array<any>)=>{
    this.basketElementCount = array.length;
  })
}
textEmitterSub(event:string){
  this.SearchText = event
}
}
