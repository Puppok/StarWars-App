import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlanetDTO} from "./model/planetDTO.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPlanets(url: string = 'https://swapi.dev/api/planets/?page=1'): Observable<PlanetDTO> {
    return this.http.get<PlanetDTO>(url)
  }
}
