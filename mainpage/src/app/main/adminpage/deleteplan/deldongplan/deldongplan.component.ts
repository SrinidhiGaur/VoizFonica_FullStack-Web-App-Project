import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-deldongplan',
  templateUrl: './deldongplan.component.html',
  styleUrls: ['./deldongplan.component.css']
})
export class DeldongplanComponent implements OnInit {

  plan=new Plans();
  msg="";
  id1:number;
  name;
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
   }
 deleteplan(){
 this._service.deleteUserdplanByIdFromRemote( this.id1,this.plan).subscribe(
   data=>{console.log("response received");
 this.msg="response received";
 },
   error=>{console.log("exception occured");
   this.msg="some error occured";},
 )
}

goback(){
  this._router.navigate(['/deleteplan',this.name])
}
}
