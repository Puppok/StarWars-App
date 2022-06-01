import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanetDTO} from "./model/planetDTO.interface";
import {Planet} from "./model/planet.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlanets(url: string = 'https://swapi.dev/api/planets/'): Observable<PlanetDTO> {
    return this.http.get<PlanetDTO>(url)
  }

  getPlanet(id: string): Observable<Planet> {
    const url = 'https://swapi.dev/api/planets/'
    return this.http.get<Planet>(url + id)
  }
}
