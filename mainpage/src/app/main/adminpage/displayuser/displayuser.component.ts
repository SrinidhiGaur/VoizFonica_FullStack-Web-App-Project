import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from 'src/app/user';
import { RegistrationService } from 'src/app/registration.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  user=new User();
  msg="";
  name;
  url="http://localhost:4322/displayuserall";
  items=[];
  
  id3:number;
  _display:DisplayuserComponent;
   constructor(private http:HttpClient, private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
   
        this.http.get(this.url).toPromise().then(data =>{
          console.log(data);
  
           for(let key in data){
              if(data.hasOwnProperty(key))
              this.items.push(data[key]);
           }
        });  
    
   
  }
   
  ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)


  }
 
  
goback(){
  this._router.navigate(['/adminlogin',this.name])
}
}
