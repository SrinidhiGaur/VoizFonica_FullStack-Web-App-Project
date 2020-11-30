import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { NgModule } from '@angular/core';
 import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  angForm:FormGroup;
  user=new User();
 msg="";
 name;
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute,private fb: FormBuilder) { this.createForm(); }
  ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
this.name=n;
console.log(this.name)
  }
  createUser()
  {
    this._service.registerUserFromRemote( this.user).subscribe(
      data=>{console.log("response received");
    this.msg="user created successfully";
    }
    ,
    error=>{console.log("exception occured");
    this.msg="user creation failed. try again";},
  
    )


}
createForm(){
  this.angForm=this.fb.group({
  name:['',[Validators.required, Validators.pattern('^[a-zA-Z ]+[a-zA-Z0-9_]+@gmail+.com*$')]],
  pass:['',[Validators.required,Validators.minLength(8)]],
  pa:['',[Validators.required]],
  ffn:['',[Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
  ln:['',[Validators.required,  Validators.pattern('^[a-zA-Z ]*$')]],
  an:['',[Validators.required]],
  dob:['',[Validators.required]],
  st:['',[Validators.required]],
  
});
}

goback(){
  this._router.navigate(['/adminlogin',this.name])
}
}
