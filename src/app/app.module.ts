import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VirtualKbComponent } from './virtual-kb/virtual-kb.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { JuveJerseyComponent } from './juve-jersey/juve-jersey.component';
import { JuveJerseyFlockingComponent } from './juve-jersey-flocking/juve-jersey-flocking.component';
import { JuveJerseyPriceComponent } from './juve-jersey-price/juve-jersey-price.component';
import { JuveJerseyVignettesComponent } from './juve-jersey-vignettes/juve-jersey-vignettes.component';
import { AjaxComponent } from './ajax/ajax.component';
import { AjaxPostComponent } from './ajax-post/ajax-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerManagerModule } from './player-manager/player-manager.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarouselComponent,
    VirtualKbComponent,
    PlayersComponent,
    PlayerComponent,
    PlayerFormComponent,
    JuveJerseyComponent,
    JuveJerseyFlockingComponent,
    JuveJerseyPriceComponent,
    JuveJerseyVignettesComponent,
    AjaxComponent,
    AjaxPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PlayerManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
