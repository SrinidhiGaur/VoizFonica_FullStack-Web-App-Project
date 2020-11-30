import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/user';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user=new User();
  msg="";
  name;
  id:number;
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute: ActivatedRoute) { 
   this.name=this._service.adminname;
        console.log(this._service.adminname);
   }
 
  ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
  }
  updateUser(){
    this._service.UpdateUserFromRemote(this.id,this.user).subscribe(
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
