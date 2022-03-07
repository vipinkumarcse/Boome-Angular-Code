import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;
declare var otpVerification: any;
declare var $: any;

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css']
})
export class ClientSignupComponent implements OnInit {
  SignupData: FormGroup;

  constructor(public common: CommonFunctionService,
    public messgae: MessageHandlingService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    new cstmScroll;
    new otpVerification;

    this.SignupData = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      isAgreeWithTNC: ['', Validators.required]
    }, { validator: this.checkPasswords })
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
        return { invalidEmail: true };
      }
    }
  }

  checkPasswords(control: AbstractControl) {
    const pass = control.get('password').value;
    const confirmPass = control.get('confirmPassword').value;;
    if (pass != confirmPass) {
      control.get('confirmPassword').setErrors({ ConfirmPassword: true });
    } else {
      return null;
    }
  }

  redirect() {
    this.common.getSignupData(this.SignupData.value)
    this.router.navigate(['/client-register'])
  }

  loginScreen() {
    this.router.navigate(['/selectRole'])
  }



}
