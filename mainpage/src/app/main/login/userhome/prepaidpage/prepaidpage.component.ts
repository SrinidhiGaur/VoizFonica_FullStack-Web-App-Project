import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-prepaidpage',
  templateUrl: './prepaidpage.component.html',
  styleUrls: ['./prepaidpage.component.css']
})
export class PrepaidpageComponent  {

  url="http://localhost:4322/displayuserpreplans";
  id;
   items=[];
   url1="http://localhost:4322/displayuseroffers";
  id1;
   items1=[];
   plansid;
 msg;
 price;
 offersid;
 user = new User();
 
   constructor(private http:HttpClient,private _router : Router,private ser:RegistrationService)
   {
     this.id=ser.id;
     this.ser.postid=this.id;
     this.plansid=ser.plansid;
       this.http.get(this.url).toPromise().then(data =>{
         console.log(data);
 
          for(let key in data){
             if(data.hasOwnProperty(key))
             this.items.push(data[key]);
          }
       });  
 
 
       this.http.get(this.url1).toPromise().then(data =>{
         console.log(data);
 
          for(let key in data){
             if(data.hasOwnProperty(key))
             this.items1.push(data[key]);
          }
       });  
 
      
   }  
     gotopayment(idpla){
       console.log(idpla);
       this.plansid=idpla;
       this.ser.plansid=idpla;
       this.ser.fetchpreplanByIdFromRemote(this.plansid).subscribe(
         data=>{console.log(data);
           this.price=(data.price);
           this.ser.price=(data.price);
           this.ser.validity=(data.validity);
           this.ser.data=(data.data);
         
          this.msg="response received";
          this._router.navigate(['/paymentportal',this.id,this.plansid]);
          console.log("response recharge");
       
       },
         error=>{console.log("exception occured");
         this.msg="some error occured";},
       )  
     
     }
 
     gotopayment1(idpla){
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
             
          this.msg="response received";
          this._router.navigate(['/paymentportal1',this.id,this.offersid]);
          console.log("response recharge");
          
       
       },
         error=>{console.log("exception occured");
         this.msg="some error occured";},
       )  
     
     }
     
     switchtopost(){
       console.log(this.id);
      this.ser.UpUserServiceTypeFromRemote(this.id,this.user).subscribe(
        data=>{console.log("response received");
      this.msg="response received";
      this._router.navigate(['/postpaidpage',this.id])
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      )
    }
      
  goback(){
   this._router.navigate(['/userhome'])
 }
 
}
