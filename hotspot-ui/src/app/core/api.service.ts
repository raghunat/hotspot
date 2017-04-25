import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  url = 'http://localhost:3002';

  constructor(private http: Http) {
  }

  login(email: string, password: string) {
    return this.http.post(`${this.url}/login`, {
      email: email,
      password: password
    }).toPromise();
  }

  getNearbySpots(lat: number, lng: number) {
    return this.http.post(`${this.url}/nearby-spots`, {
      location: [lat, lng]
    }).map(r => r.json()).toPromise();
  }

  createSpot(name: string, lat: number, lng: number) {
    return this.http.post(`${this.url}/create-spot`, {
      location: [lat, lng],
      name: name
    }).map(r => r.json()).toPromise();
  }
}
