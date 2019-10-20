import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { GameComponent } from './content/game/game.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { HomeComponent } from './content/home/home.component';
import { StartComponent } from './content/game/start/start.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'game/start',
    component: StartComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
