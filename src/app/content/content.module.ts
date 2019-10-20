import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'ng-sidebar';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './game/canvas/canvas.component';
import { ControlPanelComponent } from './game/control-panel/control-panel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    CanvasComponent,
    ControlPanelComponent,
    AboutUsComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [
    HomeComponent,
    AboutUsComponent,
    GameComponent
  ]
})
export class ContentModule { }
