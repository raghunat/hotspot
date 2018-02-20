import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule {
}
