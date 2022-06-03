import {Component, OnInit} from '@angular/core';
import {PlanetListService} from "../planet-list.service";

@Component({
  selector: 'planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent implements OnInit{

  constructor(readonly planetService: PlanetListService) { }

  ngOnInit() {
    this.planetService.init()
  }
}
