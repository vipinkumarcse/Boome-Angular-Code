import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;
declare var otpVerification: any;
declare var $: any;

@Component({
  selector: 'app-clientregister',
  templateUrl: './clientregister.component.html',
  styleUrls: ['./clientregister.component.css']
})
export class ClientregisterComponent implements OnInit {
  SignupData: FormGroup;
  allData: any;
  country: string[];
  cities: any;
  countryvalue: any;
  countryCode: any;
  fileImage: any;
  imageUploadData: any;
  imgURL: any;
  imageName: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  signUp: any;
  otpform: FormGroup;

  constructor(public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUp = this.common.returnSignupData()
    console.log(this.signUp)
    this.SignupData = this.formBuilder.group({
      // email: ['', [Validators.required]],
      // password: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
      isAgreeWithTNC: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // mobileCountryCode: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      fromCountry: ['Afghanistan', Validators.required],
      currentCountry: ['Afghanistan', Validators.required],
      imageFilename: [''],
    })
    new cstmScroll;
    new otpVerification;
    this.countryCode = '971'

       /*otp*/
       this.otpform = this.formBuilder.group({
        one: ['', [Validators.required]],
        two: ['', [Validators.required]],
        three: ['', [Validators.required]],
        four: ['', [Validators.required]]
      });
    this.countryList()
  }

  countryList() {
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.SignupData.value.currentCountry)
    })
  }

  getCitieswithcountries(event) {
    if (event.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    this.cities = Object(this.allData[this.countryvalue]);
    this.SignupData.patchValue({
      city: this.cities[0]
    })
    console.log(this.cities)
  }

  onCountryChange(data) {
    console.log(data)
    this.countryCode = data.dialCode
  }

  hasError(event) {
    console.log('helloooo')
    console.log(event)
  }

  selectImage(event: any) {
    console.log(event);
    var that = this;
    if (event.target.files && event.target.files[0]) {
      let fileList = event.target.files;
      let file = fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.imageUploadData = event.target.files[0]
      reader.onload = function () {
        console.log(reader.result)
        that.imgURL = reader.result;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  imageUpload() {
    if (this.imageUploadData) {
      let data = {
        key: this.imageUploadData.name,
        contentType: this.imageUploadData.type
      }
      this.http.post(this.apiList.ImageUpload, data).subscribe((res: any) => {
        console.log(res)
        if (res.statusCode == 200) {
          this.imageName = res.data.fileName;
          // this.putApi = res.data.preSignedUrl;
          this.common.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage);
          this.signup()
          // this.talentSignupData.patchValue({
          //   image:res.data.fileName 
          // })
        } else {

        }
      }, error => {
        console.log(error)

      })
    }
  }


  signupSubmit() {
    if (this.imageUploadData) {
      this.imageUpload()
      
    } else {
      this.messgae.error('Firstly Select profile picture')
    }
  }

  signup(){
    let data = {
      email: this.signUp.email,
      password: this.signUp.password,
      confirmPassword: this.signUp.confirmPassword,
      isAgreeWithTNC: this.SignupData.value.isAgreeWithTNC,
      firstName: this.SignupData.value.firstName,
      lastName: this.SignupData.value.lastName,
      mobileCountryCode: '+' +  this.countryCode,
      mobile: this.SignupData.value.mobile,
      gender: this.SignupData.value.gender,
      city: this.SignupData.value.city,
      fromCountry: this.SignupData.value.fromCountry,
      currentCountry: this.SignupData.value.currentCountry,
      imageFilename: this.imageName,
    }
    this.http.post(this.apiList.clientSignup, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        $('#otp').modal('show');
      }
    }, error => {

    })
  }

  otpsubmit() {
    let otpvalue = this.otpform.value.one + this.otpform.value.two + this.otpform.value.three + this.otpform.value.four;
    let data = {
      mobile: this.SignupData.value.mobile,
      mobileCountryCode: '+' + this.countryCode,
      otp: otpvalue
    }
    this.http.post(this.apiList.clientOtp, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        localStorage.setItem('token', res.data.token);
        $('#otp').modal('hide');
        $('#otp_success').modal('show');
      } else {
        //alert(res.message)
      }
    }, error => {
      //alert(error.error.message)
    })
  }

  done(){
    $('#otp_success').modal('hide');
    this.router.navigate(['/client-social-media-url'])
  }
}
