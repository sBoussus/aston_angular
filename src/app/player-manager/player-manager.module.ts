import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [MainComponent, PlayerListComponent, PlayerFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class PlayerManagerModule { }
