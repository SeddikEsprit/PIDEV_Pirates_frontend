import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GibierRoutingModule } from './gibier-routing.module';
import { GibierComponent } from './gibier/gibier.component';


@NgModule({
  declarations: [
    GibierComponent
  ],
  imports: [
    CommonModule,
    GibierRoutingModule
  ]
})
export class GibierModule { }
