import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.css']
})
export class CommonLoginComponent implements OnInit {
  role:boolean = false
  selectRole: any;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  select(value:any){
    this.selectRole= value
    this.role = true;
  }

  // redirect(){
  //   this.router.navigate(['/login'
  //   ])
  // }

}
