import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterOptions} from "../../../shared/filter-options";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {GenderFilterService} from "./gender-filter.service";

@Component({
  selector: 'gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss'],
})
export class GenderFilterComponent implements OnInit, OnDestroy {

  readonly filterOptions = FilterOptions

  option: FormControl = new FormControl(FilterOptions.NONE)
  optionStream: Subscription = new Subscription()

  constructor(readonly genderFilterService: GenderFilterService) { }

  ngOnInit(): void {
    this.optionStream.add(this.option.valueChanges.subscribe(value => this.genderFilterService.updateOption(value)))
  }

  ngOnDestroy(): void {
    this.optionStream.unsubscribe()
  }
}
