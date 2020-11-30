import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-deleteplan',
  templateUrl: './deleteplan.component.html',
  styleUrls: ['./deleteplan.component.css']
})
export class DeleteplanComponent implements OnInit {
name;
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
 

  ngOnInit(): void {
     let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
  }
  delpre(){
    this._router.navigate(['/delpreplan',this.name])
  }
  delpost(){
    this._router.navigate(['/delpostplan',this.name])
  }
  deldong(){
    this._router.navigate(['/deldongplan',this.name])
  }
}
