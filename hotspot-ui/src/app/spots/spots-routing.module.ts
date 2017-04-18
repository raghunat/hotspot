import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpotsComponent} from "./spots.component";
import {SpotDetailComponent} from "./spot-detail/spot-detail.component";

const routes: Routes = [
  {path: '', component: SpotsComponent},
  {path: ':id', component: SpotDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotsRoutingModule {
}
