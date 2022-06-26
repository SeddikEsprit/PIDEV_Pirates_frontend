import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChasseRoutingModule } from './chasse-routing.module';
import { ChasseComponent } from './chasse/chasse.component';


@NgModule({
  declarations: [
    ChasseComponent
  ],
  imports: [
    CommonModule,
    ChasseRoutingModule
  ]
})
export class ChasseModule { }
