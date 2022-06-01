import { Component } from '@angular/core';
import {PlanetCardService} from "./planet-card.service";

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [PlanetCardService]
})
export class PlanetCardComponent {

  constructor(readonly planetCardService: PlanetCardService) { }

}
