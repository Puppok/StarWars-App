import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from "./planet-list/planet-list.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'planet-list', pathMatch: 'full' },
  { path: 'planet-list', component: PlanetListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',  component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
