import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';

import { ContentRoutingModule } from './content-routing.module';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './game/canvas/canvas.component';
import { ControlPanelComponent } from './game/control-panel/control-panel.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    CanvasComponent,
    ControlPanelComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SidebarModule
  ]
})
export class ContentModule { }
