import {Injectable} from '@angular/core';
import {catchError, EMPTY, Observable, shareReplay, switchMap, take} from "rxjs";
import {Planet} from "../../shared/model/planet.interface";
import {ApiService} from "../../shared/api.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private api: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  getPlanet(): Observable<Planet> {
    return this.planet$.pipe(
      take(1)
    )
  }
}
