import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from  '@angular/material/toolbar';
import { MainComponent } from './components/main/main.component';
import { DetailsComponent } from './components/details/details.component';
import { BasketComponent } from './components/basket/basket.component';
import { CardComponent } from './components/card/card.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselMenuComponent } from './components/carousel-menu/carousel-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DetailsComponent,
    CardComponent,
    BasketComponent,
    FooterComponent,
    CarouselMenuComponent,
    FilterInputComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    FontAwesomeModule,

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
