import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';

import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './game/canvas/canvas.component';
import { ControlPanelComponent } from './game/control-panel/control-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    CanvasComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SidebarModule
  ]
})
export class ContentModule { }
