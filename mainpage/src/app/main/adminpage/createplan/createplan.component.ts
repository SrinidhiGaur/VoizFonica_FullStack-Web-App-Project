import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {
name;
constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute,private fb: FormBuilder){}
ngOnInit(

){
  let n=this._activatedRoute.snapshot.paramMap.get('name')
  this.name=n;
  console.log(this.name)
}

gotopreplans(){
  this._router.navigate(['/createpreplan',this.name])
}
gotopostplans(){
  this._router.navigate(['/createpostplan',this.name])
}
gotodongleplans(){
  this._router.navigate(['/createdongleplan',this.name])
}
}
