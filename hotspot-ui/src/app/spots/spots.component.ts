import {Component, OnInit} from '@angular/core';
import {MapService} from "../core/map.service";
import {ApiService} from "../core/api.service";
import {GeolocationService} from "../core/geolocation.service";

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.scss']
})
export class SpotsComponent implements OnInit {

  lat: number;
  lng: number;
  loadingSpots = true;
  loadingMap = true;
  loadingCreateSpot = false;
  position: Position;
  spots = [];

  constructor(private mapService: MapService, private api: ApiService, private geo: GeolocationService) {
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {

    this.lat = 40;
    this.lng = 40;
    this.geo.getCoordinates()
      .then((pos: Position) => {
        this.mapService.init('#spot-map', pos.coords.latitude, pos.coords.longitude);
        this.loadingMap = false;
        this.position = pos;
        return pos;
      })
      .then((pos: Position) => {
        this.mapService.addMarker('You!', pos.coords.latitude, pos.coords.longitude);
        return this.api.getNearbySpots(pos.coords.latitude, pos.coords.longitude)
      })
      .then((spots: Array<any>) => this.spots = spots)
      .then(() => {
        this.mapService.clearMarkers();
        this.spots.forEach(s => {
          this.mapService.addMarker(`${s.name}: ${s.checkIns.length}`, s.location[0], s.location[1]);
        });
      })
      .then(() => this.loadingSpots = false)
      .catch(e => {
        alert('Error Getting spots/map: ' + e);
        console.error(e);
      });
  }

  addSpot() {
    this.loadingCreateSpot = true;
    this.api.createSpot(prompt("Spot Name:"), this.position.coords.latitude, this.position.coords.longitude)
      .then(() => this.loadingCreateSpot = false)
      .then(() => this.refresh())
      .catch(e => {
        alert('Error creating spot: ' + e);
        console.error(e);
      })
  }

}
