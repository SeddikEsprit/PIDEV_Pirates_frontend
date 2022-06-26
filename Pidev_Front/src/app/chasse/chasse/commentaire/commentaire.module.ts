import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentaireRoutingModule } from './commentaire-routing.module';
import { CommentaireComponent } from './commentaire/commentaire.component';


@NgModule({
  declarations: [
    CommentaireComponent
  ],
  imports: [
    CommonModule,
    CommentaireRoutingModule
  ]
})
export class CommentaireModule { }
