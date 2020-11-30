import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-createpostplan',
  templateUrl: './createpostplan.component.html',
  styleUrls: ['./createpostplan.component.css']
})
export class CreatepostplanComponent implements OnInit {

  plans=new Plans();
  msg="";
  name;
 
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute,private fb: FormBuilder) { 
     }
   ngOnInit(): void {
     let n=this._activatedRoute.snapshot.paramMap.get('name')
 this.name=n;
 console.log(this.name)
   }
 
   createplan()
   {
     this._service.createuserpostplanFromRemote( this.plans).subscribe(
       data=>{console.log("response received");
     this.msg="plan created successfully";
     }
     ,
     error=>{console.log("exception occured");
     this.msg="plan creation failed. try again";},
   
     )
 
 
 }
 
 
 goback(){
   this._router.navigate(['/createplan',this.name])
 }

}
