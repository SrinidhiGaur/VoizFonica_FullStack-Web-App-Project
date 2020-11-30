import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.css']
})
export class UpdateofferComponent implements OnInit {
  offer=new Offers();
  msg="";
  name;
 id:number;
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute,private fb: FormBuilder) { 
     }
   ngOnInit(): void {
     let n=this._activatedRoute.snapshot.paramMap.get('name')
 this.name=n;
 console.log(this.name)
   }
 
   updateoffer()
   {
     this._service.UpdateUserofferFromRemote( this.id, this.offer).subscribe(
       data=>{console.log("response received");
     this.msg="offer updated successfully";
     }
     ,
     error=>{console.log("exception occured");
     this.msg="offer updation failed. try again";},
   
     )
 
}

}
