import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MaterialModule
  ]
})
export class InformationModule { }
