import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/servisebi/proxy.service';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private proxyService: ProxyService, private route: ActivatedRoute) { }
  data$!: Observable<any>
  categories$!: Observable<any>
  selectedCategory$!: string
  // sortedData: any[] = [];
  // sortAscending = true;
SearchText!:string
  ngOnInit(): void {
    this.data$=this.proxyService.getAllCards()
    this.route.paramMap.subscribe(params => {
      let categoryId = params.get('id');
      this.selectedCategory$ = categoryId ? categoryId : '';
      if (categoryId) {
        this.data$ = this.proxyService.getAllCardsByCategory(categoryId)
      } else {
        this.data$ = this.proxyService.getAllCards();
      }
    });
    this.categories$ = this.proxyService.getAllCategories();
  }

  textEmitterSub(event:string){
   this.SearchText = event
  } 
}
