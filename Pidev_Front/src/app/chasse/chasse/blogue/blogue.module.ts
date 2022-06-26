import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogueRoutingModule } from './blogue-routing.module';
import { BlogueComponent } from './blogue/blogue.component';


@NgModule({
  declarations: [
    BlogueComponent
  ],
  imports: [
    CommonModule,
    BlogueRoutingModule
  ]
})
export class BlogueModule { }
