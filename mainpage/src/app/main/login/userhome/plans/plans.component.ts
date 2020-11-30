import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import{Plans} from 'app/src/plans'
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  name;
  id;
    constructor(private ser:RegistrationService,private _router : Router )
     {
      this.name=this.ser.username;
      this.id=this.ser.id;
          console.log(this.ser.username);
  
     }
  prepaidplans(){
    this._router.navigate(['/prepaidplans',this.id])
  }
  postpaidplans(){
    this._router.navigate(['/postpaidplans',this.id])
  }
  dongleplans(){
    this._router.navigate(['/dongleplans',this.id])
  }

 

}

