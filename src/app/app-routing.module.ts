import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'planet', pathMatch: 'full' },
  { path: 'planet', loadChildren: () => import('./planets/planets.module').then(module => module.PlanetsModule) },
  { path: 'about', component: AboutComponent },
  { path: '**',  component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
