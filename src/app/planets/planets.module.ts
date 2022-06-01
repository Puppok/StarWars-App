import {NgModule} from '@angular/core';

import {PlanetListComponent} from "./planet-list/planet-list.component";
import {PlanetInfoComponent} from "./planet-info/planet-info.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PreloaderComponent} from "./preloader/preloader.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PlanetListComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./planet-card/planet-card.module').then(module => module.PlanetCardModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PlanetListComponent,
    PlanetInfoComponent,
    PreloaderComponent,
  ],
})
export class PlanetsModule {
}
