import {Component, Input, OnInit} from '@angular/core';
import {Planet} from "../../shared/model/planet.interface";

@Component({
  selector: 'planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  @Input() planet!: Planet

  constructor() { }

  ngOnInit(): void {
  }

}
