import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';
import { MaterialModule } from './../../material.module';
//import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
//import { SortPipe } from 'src/app/shared/pipes/sort.pipe';



@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,

    
    
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PeopleModule { }
