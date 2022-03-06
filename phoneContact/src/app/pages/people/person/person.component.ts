import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;
  @Output() infoClick = new EventEmitter<Person>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onClick(): void {
    //console.log("Info", this.person);
    this.infoClick.emit(this.person);
    this.router.navigate(['/information']);
  }

}
