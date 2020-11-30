import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-helpsupport',
  templateUrl: './helpsupport.component.html',
  styleUrls: ['./helpsupport.component.css']
})
export class HelpsupportComponent implements OnInit {

  constructor(private _service:RegistrationService,private _router : Router){}

  ngOnInit(): void {
  }
gotofaq(){
  this._router.navigate(['/faq'])
}
}
