import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offers } from 'src/app/offers';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-deleteoffer',
  templateUrl: './deleteoffer.component.html',
  styleUrls: ['./deleteoffer.component.css']
})
export class DeleteofferComponent implements OnInit {

  
offer=new Offers();
  msg="";
  id1:number;
  name;
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
   }
 deleteoffer(){
 this._service.deleteUserofferByIdFromRemote( this.id1,this.offer).subscribe(
   data=>{console.log("response received");
 this.msg="response received";
 },
   error=>{console.log("exception occured");
   this.msg="some error occured";},
 )
}

}
