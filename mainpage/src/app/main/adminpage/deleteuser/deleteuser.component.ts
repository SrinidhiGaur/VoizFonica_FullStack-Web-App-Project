import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  user=new User();
  msg="";
  id1:number;
  name;
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
   }
 deleteUser(){
 this._service.deleteUserByIdFromRemote( this.id1,this.user).subscribe(
   data=>{console.log("response received");
 this.msg="response received";
 },
   error=>{console.log("exception occured");
   this.msg="some error occured";},
 )
 }
 gotohome(){
  this._router.navigate(['/adminlogin',this.name])
 }
 
}
