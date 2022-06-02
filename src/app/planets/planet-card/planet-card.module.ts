import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PlanetCardComponent} from "./planet-card.component";
import {RouterModule, Routes} from "@angular/router";
import {GenderFilterModule} from "./gender-filter/gender-filter.module";

const routes: Routes = [
  {
    path: '',
    component: PlanetCardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenderFilterModule
  ],
  exports: [],
  declarations: [
    PlanetCardComponent,
  ]
})
export class PlanetCardModule {
}
