import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesContainerComponent } from './candidates-container.component';
import { VotesComponent } from './votes.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CandidatesContainerComponent,
    VotesComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    CandidatesRoutingModule,
  ]
})
export class CandidatesModule { }
