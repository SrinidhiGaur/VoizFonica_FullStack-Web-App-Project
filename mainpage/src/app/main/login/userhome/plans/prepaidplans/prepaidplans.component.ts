import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Tranhistory } from 'src/app/tranhistory';
import { User } from 'src/app/user';

@Component({
  selector: 'app-prepaidplans',
  templateUrl: './prepaidplans.component.html',
  styleUrls: ['./prepaidplans.component.css']
})
export class PrepaidplansComponent  {
id;
plansid;
  url="http://localhost:4322/displayuserpreplans";
 price;
  items=[];
plans=new Plans();
msg;
tran=new Tranhistory();
  constructor(private http:HttpClient,private _router : Router,private ser:RegistrationService)
  {
    this.id=ser.id;
      this.http.get(this.url).toPromise().then(data =>{
        console.log(data);

         for(let key in data)
         {
           
            if(data.hasOwnProperty(key))
            this.items.push(data[key]);
         }

      });  

     
  }
  gotopayment(idpla){
    console.log(idpla);
    this.plansid=idpla;
    this.ser.plansid=idpla;
    this.ser.fetchpreplanByIdFromRemote(this.plansid).subscribe(
      data=>{console.log(data);
       this.msg="response received";
       this.price=(data.price);
    this.ser.price=(data.price);
    this.ser.validity=(data.validity);
    this.ser.data=(data.data);
  this.tran.price=(data.price);
  console.log("this is prepaid"+this.tran.price);
  this._router.navigate(['/paymentportal',this.id,this.plansid]);
  console.log("response recharge");
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    ) 
   
  }


}
