import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  template: '{{ login.name }}',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent  implements OnInit {
name;
id;
  constructor(private ser:RegistrationService,private _router : Router )
   {
    this.name=this.ser.username;
    this.id=this.ser.id;
        console.log(this.ser.username);

   }
  ngOnInit(): void {
  }
  gotologin(){
    this._router.navigate(['/login'])
  }
  gotoinfo(){
    this._router.navigate(['/userinfo',this.id])
  }
  gotoplans(){
    this._router.navigate(['/plans',this.id])
  }
  tranhistory(){
    this._router.navigate(['/tranhistory',this.id])
  }
  notifications(){
    this._router.navigate(['/notifications',this.id])
  }
  offers(){
    this._router.navigate(['/offers',this.id])
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
  prepaidpage(){
    this._router.navigate(['/prepaidpage',this.id])
  }
  postpaidpage(){
    this._router.navigate(['/postpaidpage',this.id])
  }
  donglepage(){
    this._router.navigate(['/donglepage',this.id])
  }
 faq(){
    this._router.navigate(['/faq',this.id])
  }
}