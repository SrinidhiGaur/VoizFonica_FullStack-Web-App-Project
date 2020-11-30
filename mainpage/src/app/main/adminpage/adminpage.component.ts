import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { RegistrationService } from 'src/app/registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 import { NgModule } from '@angular/core';
 import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  angForm:FormGroup;
  admin=new Admin();
  msg="";
  name;
   constructor(private _service:RegistrationService,private _router : Router,private fb: FormBuilder) { 
    this.createForm();
   }
 
   ngOnInit(): void {
   }
 loginadmin(){

  this._service.adminLoginFromRemote( this.admin).subscribe(
    data=>
    {
      
      console.log("response received");
      this._service.adminname=(data.emailId);
      this.name= this._service.adminname;
    this._router.navigate(['/adminlogin',this.name])
   
   
  },
    error=>{console.log("exception occured");
    this.msg="some error occured please check your credentials or please register if not registered";},
  )

 }
 gotohome(){
   this._router.navigate(['/main'])
 }


 createForm(){
  this.angForm=this.fb.group({
  name:['',[Validators.required]],
  pass:['',[Validators.required]],
  
});
 }
}





