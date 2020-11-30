import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { NgModule } from '@angular/core';
 import {NgForm} from '@angular/forms';
import { User } from 'src/app/user';
import { RegistrationService } from 'src/app/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  angForm:FormGroup;
  user =new User();
msg="";
  constructor(private _service:RegistrationService,private _router:Router,private fb: FormBuilder) { this.createForm(); }
  ngOnInit(): void {
  }
  gotohome(){
    this._router.navigate(['/main'])
  }
  
 createForm(){
  this.angForm=this.fb.group({
  name:['',[Validators.required,Validators.email]],
  pass:['',[Validators.required,Validators.minLength(8)]],
  pa:['',[Validators.required]],
  ffn:['',[Validators.required]],
  ln:['',[Validators.required]],
  an:['',[Validators.required]],
  dob:['',[Validators.required]],
  st:['',[Validators.required]],
  
});
}

  registerUser()
  {

    
    this._service.registerUserFromRemote( this.user).subscribe(
      data=>{console.log("response received");
    this.msg="registered successfully. please login";
    this._router.navigate(['/login']);
    }
    ,
    error=>{console.log("exception occured");
    this.msg="this user is already registered . please login";},
  
    )

  }
}
