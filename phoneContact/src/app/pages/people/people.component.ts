import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { InfoService } from 'src/app/shared/services/info.service';
import { Person } from './interfaces/person.interface';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people!: Person[];
  filterpost = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(
    private peopleService: PeopleService,
    private infoService: InfoService
    ) { }

  ngOnInit(): void {
    this.peopleService.getPeople()
    .pipe(
      tap((people: Person[]) => this.people = people)
    ) 
    .subscribe()
  }

  sendInfo(person: Person): void{
    console.log("Desde people", person);
    this.infoService.updateInfo(person);
    
  }

  onSortDirection(){
    if(this.SortDirection === 'desc'){
      console.log("pasando a asc")
      this.SortDirection = 'asc';
    }else{
      console.log("pasando a desc")
      this.SortDirection = 'desc';
    }
  }


}
