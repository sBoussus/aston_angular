import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
