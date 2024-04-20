import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/servisebi/proxy.service';
import { RouterModule, Routes } from '@angular/router';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // TODO: უნდა მივიღოთ id მისამართიდან /category/electronics ან /category/jewelery ... 

  constructor(private proxyService: ProxyService) { }
  data$!: Observable<any>                //დავასაბსქრაიბეთ აქ 
  
  categories$!: Observable<any>    
  ngOnInit(): void {
    this.data$ = this.proxyService.getAllCards();
    this.categories$ = this.proxyService.getAllCategories();
  }
 
}
