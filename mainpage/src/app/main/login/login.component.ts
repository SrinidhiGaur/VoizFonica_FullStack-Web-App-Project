import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm:FormGroup;
   user=new User();
    msg="";
    name:any;
    
    constructor(private _service:RegistrationService,private _router : Router,private fb: FormBuilder) { 
      this.createForm();
     }

  ngOnInit(): void {
  }
loginUser(){
  this._service.loginUserFromRemote( this.user).subscribe(
  data=>
  {
    
    console.log("response received");
  this._router.navigate(['/userhome'])
  this._service.username=(data.firstname);
  this._service.id=(data.id);
  this._service.emailId=(data.emailId);
  this._service.phonenumber=(data.phonenumber);
 
 
},
  error=>{console.log("exception occured");
  this.msg="some error occured please check your credentials or please register if not registered";},
)
}
gotoregister(){
  this._router.navigate(['/registration'])
}

gotohome(){
  this._router.navigate(['/main'])
}
createForm(){
  this.angForm=this.fb.group({
  name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+[a-zA-Z0-9_.]+@gmail+.com*$')]],
  pass:['',[Validators.required,Validators.minLength(8)]],


  
  
});

}
}