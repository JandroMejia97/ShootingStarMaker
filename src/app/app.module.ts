import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './content/home/home.component';
import { GameComponent } from './content/game/game.component';
import { CanvasComponent } from './content/game/canvas/canvas.component';
import { ControlPanelComponent } from './content/game/control-panel/control-panel.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { SidebarModule } from 'ng-sidebar';
import { StartComponent } from './content/game/start/start.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    CanvasComponent,
    ControlPanelComponent,
    AboutUsComponent,
    StartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    //ContentModule
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
