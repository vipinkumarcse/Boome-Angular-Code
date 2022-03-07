import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var $: any;
declare var otpVerification: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType: string;
  url: any;
  forgotForm: FormGroup;
  forgotUrl: string;
  otpform: FormGroup;

  countryCode: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  countryCode1: any;
  loginForm: FormGroup;

  constructor(public messgae: MessageHandlingService, public router: Router, public activatedRoute: ActivatedRoute, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.userType = params.get('id') //+ string to number
      console.log(this.userType)
      this.countryCode1 =  '971'
    })
  }

  ngOnInit(): void {
    new otpVerification;
    $("#what_we_do_video").on('hidden.bs.modal', function (e) {
      $("#what_we_do_video iframe").attr("src", $("#what_we_do_video iframe").attr("src"));
    });
    this.forgotForm = this.formBuilder.group({
      mobileCountryCode: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', Validators.required]
    });
    this.loginForm = this.formBuilder.group({
      mobileCountryCode: [''],
     // mobile: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      check:['Email'],
    });

     /*otp*/
     this.otpform = this.formBuilder.group({
      one: ['', [Validators.required]],
      two: ['', [Validators.required]],
      three: ['', [Validators.required]],
      four: ['', [Validators.required]]
    });
  }

  onCountryChange(data) {
    console.log(data)
    this.countryCode = data.dialCode
  }

  hasError(event) {
    console.log('helloooo')
    console.log(event)
  }

  loginSubmit() {
    this.url = this.userType == 'Client' ? this.apiList.clientLogin: this.userType == 'Influencer' ? this.apiList.influncerLogin : this.userType == 'Talent' ? this.apiList.talentLogin : ''
    const mobilevalue = this.loginForm.value.check =='Phone'?this.loginForm.value.email:''   // one field is used for both field email and password
    const emailvalue = this.loginForm.value.check =='Email'?this.loginForm.value.email:''
    let data = {
      email: emailvalue,
      mobile: mobilevalue,
      mobileCountryCode: '+' + this.countryCode1,
      password: this.loginForm.value.password,
    }
    this.http.post(this.url, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        localStorage.setItem('token', res.data.userToken)
        if (this.userType == 'Influencer') { 

          if(res.data.user.isMobileVerified == false){
            $('#otp').modal('show');
          }
          else{
            this.router.navigate(['/campaign'])
          }
          
        } 
        
        else if (this.userType == 'Talent') {
          this.router.navigate(['/talent'])
        }else if (this.userType == 'Client') {
          this.router.navigate(['/client'])
        }
      }
    }, error => {
    //  console.log(error.error.message);
    })
  }

  forgotSubmit() {
    if(this.forgotForm.value.mobile || this.forgotForm.value.email){
    this.forgotUrl = this.userType == 'Client' ? '' : this.userType == 'Influencer' ? this.apiList.influncerForgotPass : this.userType == 'Talent' ? this.apiList.talentForgotPass : ''
    let data = {
      mobileCountryCode: '+' + this.countryCode,
      mobile: this.forgotForm.value.mobile,
      email: this.forgotForm.value.email
    }
    console.log(data)
    this.http.post(this.forgotUrl, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.messagex)

        
      }
    }, error => {
      console.log(error.error.message);

    })
  }else{
    this.messgae.error('Enter the Email Or Mobile Number')
  }
  }

  onCountryChange1(data) {
    console.log(data)
    this.countryCode1 = data.dialCode
  }

  reset(value){   //reset the form value when we change the login via
    this.loginForm.reset()
    this.loginForm.patchValue({
      check:value
    })
  }

  otpsubmit() {
    let otpvalue = this.otpform.value.one + this.otpform.value.two + this.otpform.value.three + this.otpform.value.four;
    const mobilevalue = this.loginForm.value.check =='Phone'?this.loginForm.value.email:''   // one field is used for both field email and password

    let data = {
      mobile: mobilevalue,
      mobileCountryCode: '+' + this.countryCode1 ,
      otp: otpvalue
    }
    this.http.post(this.apiList.influncerotp, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        localStorage.setItem('token', res.data.token)
        $('#otp').modal('hide');
       $('#otp_success').modal('show');
        this.messgae.success(res.message)
      } else {
        //alert(res.message)
      }
    }, error => {
      //alert(error.error.message)

    })
  }
}
