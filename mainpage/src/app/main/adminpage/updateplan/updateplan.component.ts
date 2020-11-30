import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateplan',
  templateUrl: './updateplan.component.html',
  styleUrls: ['./updateplan.component.css']
})
export class UpdateplanComponent implements OnInit {
name;
  constructor(private _router : Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let n=this._activatedRoute.snapshot.paramMap.get('name')
    this.name=n;
    console.log(this.name)
  }
upre(){
  this._router.navigate(['/uppreplan',this.name])
}
upost(){
  this._router.navigate(['/uppostplan',this.name])
}
udong(){
  this._router.navigate(['/updongplan',this.name])
}
}
