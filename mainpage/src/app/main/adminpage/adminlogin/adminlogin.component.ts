import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user=new User();
 name;
 
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
  
   }

  ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
this.name=n;
console.log(this.name)
  }
  gotohome(){
    this._router.navigate(['/main'])
  }
  gotocreateuser(){
    
    this._router.navigate(['/createuser',this.name])
  }
  gotocreateplan(){
    
    this._router.navigate(['/createplan',this.name])
  }
  gotocreateoffer(){
    
    this._router.navigate(['/createoffer',this.name])
  }
  
  gotodisplayuser(){

    this._router.navigate(['/displayuser',this.name])
  }
  gotoupdateuser( ){
    this._router.navigate(['/updateuser',this.name])
  }
  gotoupdateplan( ){
    this._router.navigate(['/updateplan',this.name])
  }
  gotoupdateoffer( ){
    this._router.navigate(['/updateoffer',this.name])
  }
  gotodeleteuser(){
    this._router.navigate(['/deleteuser',this.name])
  }
  gotodeleteoffer(){
    this._router.navigate(['/deleteoffer',this.name])
  }
  gotodeleteplan(){
    this._router.navigate(['/deleteplan',this.name])
  }
  gotoadminlogin(){
    this._router.navigate(['/adminpage'])
  }
  gotolivechat(){
    this._router.navigate(['/livechatadmin'])
  }

}
