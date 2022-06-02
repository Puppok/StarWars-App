import {Component} from '@angular/core';
import {PlanetCardService} from "./planet-card.service";
import {Router} from "@angular/router";
import {Resident} from "../../shared/model/resident.interface";
import {FilterOptions} from "../../shared/filter-options";
import {combineLatest, map} from "rxjs";
import {GenderFilterService} from "./gender-filter/gender-filter.service";

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [PlanetCardService]
})
export class PlanetCardComponent {

  constructor(readonly planetCardService: PlanetCardService,
              readonly genderFilterService: GenderFilterService,
              private router: Router) { }

  returnToList() {
    this.router.navigateByUrl('/planet')
  }

  private static filteredResidents(residents: Resident[], filterOptions: FilterOptions): Resident[] {
    let filteredResidents: Resident[] = [...residents]
    switch(filterOptions){
      case FilterOptions.MALE:
        return filteredResidents.filter(resident => resident.gender === 'male')
      case FilterOptions.FEMALE:
        return filteredResidents.filter(resident => resident.gender === 'female')
      case FilterOptions.UNKNOWN:
        return filteredResidents.filter(resident => resident.gender === 'n/a')
    }
    return filteredResidents
  }

  readonly residents$ = combineLatest([this.planetCardService.residents$, this.genderFilterService.option$])
    .pipe(
      map(([residents, filterOptions]) => PlanetCardComponent.filteredResidents(residents, filterOptions))
    )
}
