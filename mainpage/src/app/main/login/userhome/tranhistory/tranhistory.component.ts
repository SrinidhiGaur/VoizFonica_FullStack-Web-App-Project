import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Tranhistory } from 'src/app/tranhistory';

@Component({
  selector: 'app-tranhistory',
  templateUrl: './tranhistory.component.html',
  styleUrls: ['./tranhistory.component.css']
})
export class TranhistoryComponent implements OnInit {

  tran=new Tranhistory();
  msg="";
  name;
  url="http://localhost:4322/tranhistory";
  items=[];
  id3:number;

  // _display:DisplayuserComponent;
   constructor(private http:HttpClient, private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) 
   { 
    //  let d: Date=new Date();
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

}
