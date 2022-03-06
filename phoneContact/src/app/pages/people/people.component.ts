import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Person } from './interfaces/person.interface';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people!: Person[];


  constructor(
    private peopleService: PeopleService,
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
    //this.infoService.updateInfo(person);
    
  }

}
