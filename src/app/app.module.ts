import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainImgComponent } from './main-img/main-img.component';
import { ShopOptionComponent } from './shop-option/shop-option.component';


@NgModule({
  declarations: [
    AppComponent,
    MainImgComponent,
    ShopOptionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
