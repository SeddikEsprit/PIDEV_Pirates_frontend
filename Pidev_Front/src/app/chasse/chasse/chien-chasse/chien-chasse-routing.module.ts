import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChienChasseComponent} from "./chien-chasse/chien-chasse.component";

const routes: Routes = [
  {path:'',component:ChienChasseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChienChasseRoutingModule { }
