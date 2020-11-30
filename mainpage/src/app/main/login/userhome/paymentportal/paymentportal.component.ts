import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Tranhistory } from 'src/app/tranhistory';


@Component({
  selector: 'app-paymentportal',
  templateUrl: './paymentportal.component.html',
  styleUrls: ['./paymentportal.component.css']
})
export class PaymentportalComponent implements OnInit {

  tran=new Tranhistory();
  msg="";
  id:number;
  name;
emailid;
phonenumber;
plansid;
price;
validity;
data;

   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
 this.id=_service.id;
    this.name=_service.username;
    this.emailid=_service.emailId;
this.phonenumber=_service.phonenumber;
 this.plansid=_service.plansid;
this.price=this._service.price;
this.validity=_service.validity;
this.data=_service.data;
this.tran.name=this.name;
this.tran.phonenumber=this.phonenumber;
this.tran.emailId=this.emailid;
this.tran.price=_service.price;

   }
  ngOnInit(): void {
  }
gotopayment(){
  this._service.transcationsFromRemote(this.tran).subscribe(
    data=>{console.log("response received");
  this.msg="Payment successfull,Thank You";

  this._router.navigate(['/paymentportal',this.id,this.plansid]);
  console.log("response recharge");
  //this.tran.date=this.date;
  },
    error=>{console.log("exception occured");
    this.msg="some error occured";
  },
  )

 
}

  gotonext(){
    this._router.navigate(['/payment',this.id,this.plansid]);
  }

}
  





