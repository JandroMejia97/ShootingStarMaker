import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './content/home/home.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { GameComponent } from './content/game/game.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./content/content.module').then(c => c.ContentModule)
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
