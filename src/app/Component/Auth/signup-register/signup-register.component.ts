import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { Router } from '@angular/router';
declare var cstmScroll: any;
declare var otpVerification: any;
declare var $: any;
import * as moment from 'moment';

@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css']
})
export class SignupRegisterComponent implements OnInit {
  SignupData: FormGroup;
  countryCode: string;
  otpform: FormGroup;
  imageUploadData: any;
  imgURL: any;
  imageName: any;
  signupdata: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  putApi: any;
  fileImage

  constructor(public router:Router, public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    new cstmScroll;
    new otpVerification;

    this.SignupData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      mobileCountryCode: [''],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      isAgreeWithTNC: ['', Validators.required],
      image: [''],
      dateOfBirth: ['', Validators.required],
      currentDate:['']
    }, { validator: this.checkPasswords })
    this.countryCode = '971'


    /*otp*/
    this.otpform = this.formBuilder.group({
      one: ['', [Validators.required]],
      two: ['', [Validators.required]],
      three: ['', [Validators.required]],
      four: ['', [Validators.required]]
    });

    let date = new Date()
    this.SignupData.patchValue({
      currentDate:date
    })
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

  signUpsubmit() {
    this.signupdata = this.SignupData.value
    let data = {
      firstName: this.SignupData.value.firstName,
      lastName: this.SignupData.value.lastName,
      email: this.SignupData.value.email,
      mobileCountryCode: '+' + this.countryCode,
      mobile: this.SignupData.value.mobile,
      password: this.SignupData.value.password,
      confirmPassword: this.SignupData.value.confirmPassword,
      isAgreeWithTNC: this.SignupData.value.isAgreeWithTNC,
      image: this.imageName,
      dateOfBirth: moment(this.SignupData.value.dateOfBirth).format('DD-MM-yyyy')
    }
    this.http.post(this.apiList.influncerSignup, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        
        $('#otp').modal('show');
      } else {
       // //alert(res.message)
      }
    }, error => {
      //alert(error.error.message)
    })
  }

  onCountryChange(data) {
    console.log(data)
    this.countryCode = data.dialCode
  }

  hasError(event) {
    console.log('helloooo')
    console.log(event)
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
          this.putApi = res.data.preSignedUrl;
          this.putMethodUploadImage();
          // this.talentSignupData.patchValue({
          //   image:res.data.fileName 
          // })
          this.signUpsubmit()
        } else {

        }
      }, error => {
        console.log(error)

      })
    }

  }

  putMethodUploadImage() {
    fetch(this.putApi, {
      method: 'put',
      headers: {
        'Content-Type': this.imageUploadData.type,
      },
      body: this.fileImage
    }).then(response => {
      //console.log(response)
    }).then(jsonResponse => {
      //  console.log(jsonResponse);
    }).catch(error => {
      //  console.log(error)
    })
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

  // binEncode(data) {
  //   var binArray = []
  //   var datEncode = "";

  //   for (var i = 0; i < data.length; i++) {
  //     binArray.push(data[i].charCodeAt(0).toString(2));
  //   }
  //   for (var j = 0; j < binArray.length; j++) {
  //     var pad = padding_left(binArray[j], '0', 8);
  //     datEncode += pad + ' ';
  //   }
  //   function padding_left(s, c, n) {
  //     if (!s || !c || s.length >= n) {
  //       return s;
  //     }
  //     var max = (n - s.length) / c.length;
  //     for (var i = 0; i < max; i++) {
  //       s = c + s;
  //     } return s;
  //   }
  //   console.log(JSON.stringify(binArray));
  //   this.fileImage = binArray;
  //   this.imageUpload();

  // }

  submit() {
    if (this.imageUploadData) {
      this.imageUpload()
    } else {
      this.messgae.error('Firstly Select profile picture')
      // this.signUpsubmit()
    }
  }

  otpsubmit() {
    let otpvalue = this.otpform.value.one + this.otpform.value.two + this.otpform.value.three + this.otpform.value.four;
    let data = {
      mobile: this.signupdata.mobile,
      mobileCountryCode: '+' + this.countryCode,
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

  redirect(){
    $('#otp_success').modal('hide');
    this.router.navigate(['/create-account'])
  }

  


}
