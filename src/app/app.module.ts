import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    JuveJerseyFlockingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
