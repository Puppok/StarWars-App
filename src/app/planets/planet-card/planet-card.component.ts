import { Component } from '@angular/core';
import {PlanetCardService} from "./planet-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss'],
  providers: [PlanetCardService]
})
export class PlanetCardComponent {

  constructor(readonly planetCardService: PlanetCardService,
              private router: Router) { }

  returnToList() {
    this.router.navigateByUrl('/planet')
  }

}
