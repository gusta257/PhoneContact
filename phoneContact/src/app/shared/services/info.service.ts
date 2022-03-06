import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from 'src/app/pages/people/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  people: Person[] = [];

  private infoSubject =  new BehaviorSubject<Person[]>([]);

  constructor() { 

  }

  get infoAction$(): Observable<Person[]>{
    return this.infoSubject.asObservable();
  }

  updateInfo(person: Person):void{
    this.getInfo(person);
  }

  private getInfo(person: Person): void{
    this.people[0] = person;
    this.infoSubject.next(this.people);
  }
}
