import {Planet} from "./planet.interface";

export interface PlanetDTO {
  count: number
  next: string | null
  previous: string | null
  results: Planet[]
}
