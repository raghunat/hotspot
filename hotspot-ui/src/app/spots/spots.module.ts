import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {SpotsRoutingModule} from './spots-routing.module';
import {SpotsComponent} from './spots.component';
import {SpotDetailComponent} from './spot-detail/spot-detail.component';


@NgModule({
  imports: [
    CommonModule,
    SpotsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [SpotsComponent, SpotDetailComponent]
})
export class SpotsModule {
}
