import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { StartComponent } from './game/start/start.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CanvasComponent } from './game/canvas/canvas.component';
import { ControlPanelComponent } from './game/control-panel/control-panel.component';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    CanvasComponent,
    ControlPanelComponent,
    AboutUsComponent,
    StartComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ]
})
export class ContentModule { }
