import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocalisationComponent} from "./localisation/localisation.component";
import {AddLocalisationComponent} from "./add-localisation/add-localisation.component";
import {UpdateLocalisationComponent} from "./update-localisation/update-localisation.component";
import {DetailLocalisationComponent} from "./detail-localisation/detail-localisation.component";
import {MapLocationComponent} from "./map-location/map-location.component";

const routes: Routes = [
  {path:'',component:LocalisationComponent},
  {path:'addLocalisation',component:AddLocalisationComponent},
  {path:'updateLocalisation/:id',component:UpdateLocalisationComponent},
  {path:'detailLocalisation/:id',component:DetailLocalisationComponent},
  {path:'mapLocation',component:MapLocationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalisationRoutingModule { }
