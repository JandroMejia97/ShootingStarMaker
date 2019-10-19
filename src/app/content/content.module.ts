import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
    HomeComponent,
    GameComponent
  ]
})
export class ContentModule { }
