import {Injectable} from '@angular/core';

declare const google;

@Injectable()
export class MapService {

  map: any
  markers = [];

  constructor() {
  }

  init(selector, lat = 42.4401433, lng = -79.3362631, zoom = 15) {
    this.map = new google.maps.Map(document.querySelector(selector), {
      center: {lat: lat, lng: lng},
      zoom: zoom
    });
  }

  addMarker(label: string, lat: number, lng: number) {
    this.markers.push(new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: this.map,
      label: label
    }));
  }

  clearMarkers() {
    this.markers.forEach(i => {
      i.setMap(null);
    });
  }
}
