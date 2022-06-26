import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibierRoutingModule } from './gibier-routing.module';
import { GibierComponent } from './gibier/gibier.component';
import {ChienChasseRoutingModule} from "../chien-chasse/chien-chasse-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    GibierComponent
  ],
  imports: [
    CommonModule,
    GibierRoutingModule,
    ChienChasseRoutingModule,
    FormsModule,HttpClientModule
  ]
})
export class GibierModule { }
