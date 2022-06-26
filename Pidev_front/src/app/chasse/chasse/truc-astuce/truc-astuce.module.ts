import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucAstuceRoutingModule } from './truc-astuce-routing.module';
import { TrucAstuceComponent } from './truc-astuce/truc-astuce.component';


@NgModule({
  declarations: [
    TrucAstuceComponent
  ],
  imports: [
    CommonModule,
    TrucAstuceRoutingModule
  ]
})
export class TrucAstuceModule { }
