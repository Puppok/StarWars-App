import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FilterOptions} from "../../../shared/filter-options";

@Injectable()

export class GenderFilterService {

  private option$$ = new BehaviorSubject<FilterOptions>(FilterOptions.NONE)
  readonly option$ = this.option$$.asObservable()

  constructor() {}

  updateOption(data: FilterOptions) {
    this.option$$.next(data)
  }

  clearOption() {
    this.option$$.next(FilterOptions.NONE)
  }
}
