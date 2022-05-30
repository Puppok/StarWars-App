import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {ApiService} from "../shared/api.service";
import {PlanetDTO} from "../shared/model/planetDTO.interface";

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {

  private planetsDTO$$ = new BehaviorSubject<PlanetDTO>({
    count: 0,
    next: 'https://swapi.dev/api/planets/?page=1',
    previous: null,
    results: []
  })

  readonly planetsDTO$ = this.planetsDTO$$.asObservable()

  readonly planets$ = this.planetsDTO$.pipe(
    map(planetDTO => planetDTO.results)
  )

  constructor(private apiService: ApiService) {
  }

  init(): void {
    this.apiService.getPlanets().subscribe(planetsDTO => this.planetsDTO$$.next(planetsDTO))
  }

  nextPage(): void {
    const nextUrl = this.planetsDTO$$.getValue()?.next
    if (nextUrl) {
      this.apiService.getPlanets(nextUrl).pipe(
        map(info => this.planetsDTO$$.next(info))
      ).subscribe()
    }
  }

  previousPage(): void {
    const prevUrl = this.planetsDTO$$.getValue()?.previous
    if (prevUrl) {
      this.apiService.getPlanets(prevUrl).pipe(
        map(info => this.planetsDTO$$.next(info))
      ).subscribe()
    }
  }
}
