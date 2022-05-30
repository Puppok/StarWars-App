import {NgModule} from '@angular/core';

import {PlanetListComponent} from "./planet-list/planet-list.component";
import {PlanetInfoComponent} from "./planet/planet-info.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PlanetListComponent,
    PlanetInfoComponent
  ],
})
export class PlanetsModule {
}
