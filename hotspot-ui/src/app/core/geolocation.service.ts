import {Injectable} from '@angular/core';

@Injectable()
export class GeolocationService {

  geo: any

  constructor() {
    this.geo = navigator.geolocation;
  }

  /**
   * Returns a position item
   * @returns {Promise<Position>}
   */
  getCoordinates() {
    return new Promise((res, rej) => {
      this.geo.getCurrentPosition(res, rej);
    });
  }

}
