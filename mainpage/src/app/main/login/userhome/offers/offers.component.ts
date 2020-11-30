import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
plansid;
msg;
price;
id;
offersid;


  url="http://localhost:4322/displayuseroffers";
 
  items=[];
constructor(private http:HttpClient,private _router : Router,private ser: RegistrationService)
  {
    // this.plansid=ser.plansid;
    // this.price=ser.price;
    this.id=ser.id;
      this.http.get(this.url).toPromise().then(data =>{
        console.log(data);

         for(let key in data){
            if(data.hasOwnProperty(key))
            this.items.push(data[key]);
         }
      });  

     
  }

  // gotopayment(){
  //   this._router.navigate(['/paymentportal']);
  //   console.log("response recharge");
  // }


  gotopayment(idpla){
    console.log(idpla);
    this.offersid=idpla;
    this.ser.offersid=idpla;
    console.log(this.offersid);
    this.ser.fetchoffersByIdFromRemote(this.offersid).subscribe(
      data=>{console.log(data);
        this.price=(data.price);
        this.ser.price=(data.price);
        this.ser.description=(data.discription);
        this.ser.offers=(data.offers);
        console.log(data.discription);
      
       this.msg="response received";
       this._router.navigate(['/paymentportal1',this.id,this.offersid]);
       console.log("response recharge");
       
    
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )  
  
  }
}
