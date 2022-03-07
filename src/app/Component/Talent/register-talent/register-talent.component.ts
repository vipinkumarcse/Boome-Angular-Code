import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;
declare var $: any;
declare var otpVerification: any; 

@Component({
  selector: 'app-register-talent',
  templateUrl: './register-talent.component.html',
  styleUrls: ['./register-talent.component.css']
})
export class RegisterTalentComponent implements OnInit {
  talentSignupData: FormGroup
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  imageUploadData: any;
  countryCode: string;
  imageName: string
  otpform: FormGroup;
  signupdata: any;
  imgURL
  putApi: any;
  fileImage: any;

  constructor(public messgae: MessageHandlingService, public router:Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    new cstmScroll;
    new otpVerification;
    
    this.talentSignupData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      mobileCountryCode: [''],
      mobile: ['', Validators.required],
      password: ['', [Validators.required, this.PasswordStrengthValidator.bind(this)]],
      confirmPassword: ['', Validators.required],
      isAgreeWithTNC: ['', Validators.required],
      image: ['']
    }, { validator: this.checkPasswords
      })
    this.countryCode = '971'


    /*otp*/
    this.otpform = this.formBuilder.group({
      one: ['', [Validators.required]],
      two: ['', [Validators.required]],
      three: ['', [Validators.required]],
      four: ['', [Validators.required]]
    });
  }



  signUpsubmit() {
    this.signupdata = this.talentSignupData.value
    let data = {
      firstName: this.talentSignupData.value.firstName,
      lastName: this.talentSignupData.value.lastName,
      email: this.talentSignupData.value.email,
      mobileCountryCode: '+' + this.countryCode,
      mobile: this.talentSignupData.value.mobile,
      password: this.talentSignupData.value.password,
      confirmPassword: this.talentSignupData.value.confirmPassword,
      isAgreeWithTNC: this.talentSignupData.value.isAgreeWithTNC,
      image: this.imageName
    }
    console.log(this.apiList.talentSignup)
    this.http.post(this.apiList.talentSignup, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        $('#otp').modal('show');
     } else {
        //alert(res.message)
      }

    }, error => {

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
          this.putMethodUploadImage()
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
      // that.imageUpload()
      reader.onload = function () {
        console.log(reader.result)
        that.imgURL = reader.result;
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  submit() {
    if (this.imageUploadData) {
      this.imageUpload()
    } else {
      this.messgae.error('Select profile picture')
      //alert("Select profile picture")
      // this.signUpsubmit()
    }
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

  PasswordStrengthValidator(control: FormControl){
console.log(control.value)
    const length = control.value;
    // return { passwordStrength: `Password Must be at least 8 Char.` };
    console.log(length.length)
    if (length.length<6) {
      return { passLenght: true };
    }else{
    return null;
    }
}

  otpsubmit() {
    let otpvalue = this.otpform.value.one + this.otpform.value.two + this.otpform.value.three + this.otpform.value.four;
    let data = {
      mobile: this.signupdata.mobile,
      mobileCountryCode: '+' + this.countryCode,
      otp: otpvalue
    }
    this.http.post(this.apiList.talentotp, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        localStorage.setItem('token', res.data.token)
         $('#otp').modal('hide');
        $('#otp_success').modal('show');
      } else {
        ////alert(res.message)
      }
    }, error => {

    })
  }

  putMethodUploadImage() {
    fetch(this.putApi, {
      method: 'put',
      headers: {
        'Content-Type': this.imageUploadData.type,
      },
      body: this.fileImage
    }).then(response => {
    }).then(jsonResponse => {
    }).catch(error => {
    })
  }

  redirect(){
    $('#otp_success').modal('hide');
    this.router.navigate(['/create-account-talent'])
  }


}


