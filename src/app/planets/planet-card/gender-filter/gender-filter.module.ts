import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GenderFilterComponent} from "./gender-filter.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GenderFilterComponent
  ],
  declarations: [
    GenderFilterComponent
  ],
})
export class GenderFilterModule {
}
