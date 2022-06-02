import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {GenderFilterComponent} from "./gender-filter.component";
import {ReactiveFormsModule} from "@angular/forms";
import {GenderFilterService} from "./gender-filter.service";


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
  providers: [GenderFilterService],
})
export class GenderFilterModule {
}
