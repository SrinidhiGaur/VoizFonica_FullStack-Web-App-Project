import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
id;
    constructor(private http:HttpClient,private _router : Router,private ser:RegistrationService){
      this.id=ser.id;
    }
  ngOnInit(): void {
  }
gotopayment(){
  this._router.navigate(['/paymentportal',this.id]);
    console.log("response recharge");
}
}
