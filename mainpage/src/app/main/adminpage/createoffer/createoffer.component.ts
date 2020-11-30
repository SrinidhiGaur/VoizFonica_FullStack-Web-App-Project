import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-createoffer',
  templateUrl: './createoffer.component.html',
  styleUrls: ['./createoffer.component.css']
})
export class CreateofferComponent implements OnInit {

  offer=new Offers();
  msg="";
  name;
 
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute,private fb: FormBuilder) { 
     }
   ngOnInit(): void {
     let n=this._activatedRoute.snapshot.paramMap.get('name')
 this.name=n;
 console.log(this.name)
   }
 
   createoffer()
   {
     this._service. createuseroffersFromRemote( this.offer).subscribe(
       data=>{console.log("response received");
     this.msg="Offer created successfully";
     }
     ,
     error=>{console.log("exception occured");
     this.msg="offer creation failed. try again";},
   
     )
 
 
 }
 
}
