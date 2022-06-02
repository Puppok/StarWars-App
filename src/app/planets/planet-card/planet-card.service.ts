import {Injectable} from '@angular/core';
import {
  catchError,
  EMPTY,
  Observable,
  shareReplay,
  switchMap,
  take,
  zip
} from "rxjs";
import {Planet} from "../../shared/model/planet.interface";
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../shared/model/film.interface";
import {Resident} from "../../shared/model/resident.interface";

@Injectable()
export class PlanetCardService {

  readonly planet$ = this.activatedRoute.params.pipe(
    switchMap(params => this.api.getPlanet(params['id'])),
    catchError(() => {
      this.router.navigateByUrl('**')
      return EMPTY
    }),
    shareReplay(1)
  )

  readonly films$: Observable<Film[]> = this.planet$.pipe(
    switchMap(planet => zip(
      planet.films.map(url => this.api.getFilm(url))
    ))
  )

  readonly residents$: Observable<Resident[]> = this.planet$.pipe(
    switchMap(planet => zip(
      planet.residents.map(url => this.api.getResident(url))
    ))
  )

  constructor(private api: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  getPlanet(): Observable<Planet> {
    return this.planet$.pipe(
      take(1)
    )
  }
}
