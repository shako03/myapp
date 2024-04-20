import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {path:"" , component:MainComponent }, //როცა ცარიელიათქო ჩაიტვირთოს ესა და ეს თქო
  {path:"basket" , component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
