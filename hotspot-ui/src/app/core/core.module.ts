import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./api.service";
import {MapService} from "./map.service";
import {GeolocationService} from "./geolocation.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApiService, MapService, GeolocationService]
})
export class CoreModule {
}
