import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Tranhistory } from 'src/app/tranhistory';

@Component({
  selector: 'app-paymentportal1',
  templateUrl: './paymentportal1.component.html',
  styleUrls: ['./paymentportal1.component.css']
})
export class Paymentportal1Component implements OnInit {

  tran=new Tranhistory();
  msg="";
  id:number;
  name;
emailid;
phonenumber;

price;
validity;
data;
offersid

   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
 this.id=_service.id;
    this.name=_service.username;
    this.emailid=_service.emailId;
this.phonenumber=_service.phonenumber;
 this.offersid=_service.offersid;
this.price=this._service.price;
this.validity=_service.validity;
this.data=_service.offers;
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
  this.msg="Payment successfull, Thank You";

  
  //this.tran.date=this.date;
  },
    error=>{console.log("exception occured");
    this.msg="some error occured";
  },
  )

  this._router.navigate(['/paymentportal1',this.id,this.offersid]);
  console.log("response recharge");
}

  gotonext(){
    this._router.navigate(['/offerspayment',this.id,this.offersid]);
  }

}
