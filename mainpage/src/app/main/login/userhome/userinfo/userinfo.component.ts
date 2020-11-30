import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayuserComponent } from 'src/app/main/adminpage/displayuser/displayuser.component';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit 
{
user=new User();
id1;
msg;
username;
adhar;
phone;
dob;
lname;
password;
emailid;
stype;
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
    this.id1=this._service.id;
        console.log(this._service.id);
        this._service.fetchUserByIdforinfoFromRemote(this.id1).subscribe(
          data=>{console.log(data);
            this.username=data.firstname;
            this.lname=data.lastname;
            this.adhar=data.aadharnumber;
            this.phone=data.phonenumber;
            this.dob=data.dateofbirth;
            this.password=data.password;
            this.emailid=data.emailId;
            this.stype=data.servicetype;
            this.msg="response received";
        },
          error=>{console.log("exception occured");
          this.msg="some error occured";},
        )
  }
  ngOnInit(){}

}


