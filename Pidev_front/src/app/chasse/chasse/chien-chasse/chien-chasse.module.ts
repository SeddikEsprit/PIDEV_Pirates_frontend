import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChienChasseRoutingModule } from './chien-chasse-routing.module';
import { ChienChasseComponent } from './chien-chasse/chien-chasse.component';


@NgModule({
  declarations: [
    ChienChasseComponent
  ],
  imports: [
    CommonModule,
    ChienChasseRoutingModule
  ]
})
export class ChienChasseModule { }
