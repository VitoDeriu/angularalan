import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
