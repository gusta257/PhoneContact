import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from 'src/app/shared/services/info.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  info$ = this.infoService.infoAction$;

  constructor(
    private infoService: InfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onClick(): void {
    
    this.router.navigate(['/people']);
  }

}
