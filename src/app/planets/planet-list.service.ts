import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {ApiService} from "../shared/api.service";
import {PlanetDTO} from "../shared/model/planetDTO.interface";

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {

  public showPreloader = true
  public hideButtons = true

  private isInit = false

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

  constructor(private apiService: ApiService) {}

  init() {
    if(!this.isInit) {
      this.apiService.getPlanets().subscribe(planetsDTO => {
        this.planetsDTO$$.next(planetsDTO)
        setTimeout(() => this.showPreloader = false, 300)
        this.isInit = true
        this.hideButtons = false
      })
    }
  }

  nextPage(): void {
    const nextUrl = this.planetsDTO$$.getValue()?.next
    if (nextUrl) {
      this.showPreloader = true
      this.apiService.getPlanets(nextUrl).pipe(
        map(info => {
          this.planetsDTO$$.next(info)
          setTimeout(() => this.showPreloader = false, 300)
        })
      ).subscribe()
    }
  }

  previousPage(): void {
    const prevUrl = this.planetsDTO$$.getValue()?.previous
    if (prevUrl) {
      this.showPreloader = true
      this.apiService.getPlanets(prevUrl).pipe(
        map(info => {
          this.planetsDTO$$.next(info)
          setTimeout(() => this.showPreloader = false, 300)
        })
      ).subscribe()
    }
  }
}
