import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {AboutComponent} from './core/components/about/about.component';
import {CustomPreloadingStrategy} from './core/services/custom-preloading-strategy';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'training',
    loadChildren: './training/training.module#TrainingModule',
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: { preload: true }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy, useHash: false})],
  exports: [RouterModule],
  providers : [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
