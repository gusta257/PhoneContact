import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {
    
  }

  getPeople():Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }
}
