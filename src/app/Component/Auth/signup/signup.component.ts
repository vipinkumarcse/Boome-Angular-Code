import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  role: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  select(role: any) {
this.role = role
  }

  redirect(){
    if (this.role  == 'Client') {
      this.router.navigate(['/client-signup'])
    } else if (this.role  == 'Influencer') {
      this.router.navigate(['/signup-register'])
    } else if (this.role  == 'Talent') {
      this.router.navigate(['/register-talent'])
    }
  }

}
