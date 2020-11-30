import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Tranhistory } from 'src/app/tranhistory';

@Component({
  selector: 'app-postpaidplans',
  templateUrl: './postpaidplans.component.html',
  styleUrls: ['./postpaidplans.component.css']
})
export class PostpaidplansComponent {

  url="http://localhost:4322/displayuserpostplans";
 id;
  items=[];
  plansid;
  price;
  msg;
  tran=new Tranhistory();
  constructor(private http:HttpClient,private _router : Router,private ser:RegistrationService)
  {
    this.id=ser.id;
      this.http.get(this.url).toPromise().then(data =>{
        console.log(data);
        

         for(let key in data){
            if(data.hasOwnProperty(key))
            this.items.push(data[key]);
         }
      });  

     
  }

  gotopayment(idpla){
    console.log(idpla);
    this.plansid=idpla;
    this.ser.plansid=idpla;
    this.ser.fetchpostplanByIdFromRemote(this.plansid).subscribe(
      data=>{console.log(data);
       this.msg="response received";
       this.price=(data.price);
    this.ser.price=(data.price);
  //this.tran.price=(data.price);
    this.ser.validity=(data.validity);
    this.ser.data=(data.data);
    console.log(data.price);
    this._router.navigate(['/paymentportal',this.id,this.plansid]);
    console.log("response recharge");
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
      
   
  }
}
