import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {


  name;
  id;
    constructor(private ser:RegistrationService,private _router : Router )
     {
      this.name=this.ser.username;
      this.id=this.ser.id;
          console.log(this.ser.username);
     }
  
  ngOnInit(): void {
  }
  gotolivechat()
{
  this._router.navigate(['/livechat'])
}

}
