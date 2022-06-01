import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PlanetCardComponent} from "./planet-card.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PlanetCardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    PlanetCardComponent
  ]
})
export class PlanetCardModule {
}
