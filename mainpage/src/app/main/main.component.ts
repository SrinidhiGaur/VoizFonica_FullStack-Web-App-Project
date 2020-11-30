import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user=new User();
 
  constructor(private _service:RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }
  gotoregister(){
    this._router.navigate(['/registration'])
  }
  
  gotouserlogin(){
    this._router.navigate(['/login'])
  }
  gotoadminlogin(){
    this._router.navigate(['/adminpage'])
  }
}
