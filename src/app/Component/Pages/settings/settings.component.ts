import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,  Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonClientService } from '../../Client/CommonClientService/common-client.service';
import { ClientCampaignCommonFunctionService } from '../../Client/ClientInfluncer/ClientCampaigncommon-function.service';

declare var otpVerification: any;
declare var $: any;


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg', date: new Date()}
  topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
// topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg', date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() }
  ProfileData: any;
  list: any=[];
  arr : any = [];
  countrycode:any;
  profileData:any = {}
  select_interset: any = [];
  signupdata: any;
  show = false;
  show1 = false;
  countryvalue: any;
  cities: any;
  flagCode: any;
  countryCode: string;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
   //initialConfig: any = { initialCountry: this.profileData.mobileCountryCode }
  image: any;
  fileImage: any;
  CountryCode:any = 'in'
  imageUploadData: any;
  otpform: FormGroup;
  imageNAME: any;
  category: any;
  checked: boolean;
  selectedInterest: any=[];
  allData: any;
  country: string[];
  influencerprofileData: any;
  

  constructor(public commonInfluncer:Common_FunctionService,  public router:Router, private datePipe:DatePipe, 
     public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService,
      public formBuilder: FormBuilder) { 
   
    new otpVerification;
    this.ProfileData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      mobileCountryCode: ['', Validators.required],
      mobile: ['', Validators.required],
      image: [''],
      dateOfBirth: ['', Validators.required],
      categoryselect: [],
      bio: [],
      currentDate:[]
    }),

      /*otp*/
      this.otpform = this.formBuilder.group({
        one: ['', [Validators.required]],
        two: ['', [Validators.required]],
        three: ['', [Validators.required]],
        four: ['', [Validators.required]]
      });

    this.categoryListing()
    let date = new Date()
    this.ProfileData.patchValue({
      currentDate:date
    })
  }

  ngOnInit(): void {

    this.commonInfluncer.subject.subscribe((res: any) => {
      this.influencerprofileData = res
      if (this.influencerprofileData != 0) {
        console.log("this.influencerprofileData",this.influencerprofileData)
        console.log("res",res);
        res.user.interests.forEach((element:any) => {
          this.list.forEach((element1:any,index:any) => {
            if(element1._id == element._id ){
              element1.checked = true
              this.select_interset.push(element1._id)
          }else{
            }
          });
        });
        
        this.ProfileData.patchValue({
          firstName: res.user.firstName,
          lastName: res.user.lastName,
          email: res.user.email,
          mobile: res.user.mobile,
          dateOfBirth: res.user.dateOfBirth,
          mobileCountryCode : res.user.mobileCountryCode,
          bio: res.user.bio
        })
        this.countrycode = res.user.mobileCountryCode
        this.imageNAME = res.user.profileImage
        this.countryList();
        this.countryCodeList()
        // this.telInputObject(res.user.mobileCountryCode)
      }
    })
 

  }

  // getDetail() {
  //   this.http.get(this.apiList.influncerMyProfile).subscribe((res: any) => {
  //     if (res.statusCode == 200) {
  //       this.commonInfluncer.subject.next(res.data)
  //       this.profileData =   res.data.user
  //       res.data.user.dob = moment(res.data.user.dateOfBirth).format('DD-MM-yyyy');
  //       this.ProfileData.patchValue({
  //         firstName: res.data.user.firstName,
  //         lastName: res.data.user.lastName,
  //         email: res.data.user.email,
  //         mobile: res.data.user.mobile,
  //         dateOfBirth: res.data.user.dateOfBirth,
  //         mobileCountryCode : res.data.user.mobileCountryCode,
  //       //  categoryselect: this.list.value.checked,
  //         bio: res.data.user.bio
  //       })


     
  //       this.countrycode = res.data.user.mobileCountryCode
  //      this.imageNAME = res.data.user.profileImage
  //     }

  //   }, error => {

  //   })
  // }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
        return { invalidEmail: true };
      }
    }
  }

  categoryListing() {
    this.http.get(this.apiList.interestList).subscribe((res: any) => {
  //  this.getDetail();
  this.commonInfluncer.getInfluencerInfo()
      if (res.statusCode == 200) {
        this.list = res.data.interests
      }
    })
  } 

  select(event: any, value: any) {
    if (event.target.checked) {
      this.select_interset.push(value)
    } else {
      let index = this.removeCheckedFromArray(value);
      this.select_interset.splice(index, 1);
    }
  }

  removeCheckedFromArray(checkbox: String) {
    return this.select_interset.findIndex((category) => {
      return category === checkbox;
    })
  }

  // onCountryChange(data) {
  //  this.countryCode = data.dialCode
  // }

  hasError(event) {
 
  }
 

  submit() {
   for(var i=0; i<this.select_interset.length; ++i) {
    for(var j=i+1; j<this.select_interset.length; ++j) {
        if(this.select_interset[i] === this.select_interset[j])
            this.select_interset.splice(j--, 1);
    }
}
let data = {
      lastName: this.ProfileData.value.lastName,
      firstName: this.ProfileData.value.firstName,
      email: this.ProfileData.value.email,
      mobile: this.ProfileData.value.mobile,
      mobileCountryCode: this.countryCode ?  this.countrycode : this.countryCode  , 
      bio: this.ProfileData.value.bio,
      dateOfBirth: moment(this.ProfileData.value.dateOfBirth).format('DD-MM-yyyy'),
      profileImage: this.image,
      interests: this.select_interset, 
    }
    
    this.http.post(this.apiList.influncerEditAccount, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.commonInfluncer.getInfluencerInfo()
        // this.getDetail()
      }
    }, error => {

    })
  }

  selectImage(event: any) {
    var that = this;
    if (event.target.files && event.target.files[0]) {
      let fileList = event.target.files;
      let file = fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.imageUploadData = event.target.files[0]
      reader.onload = function () {
        that.imageNAME = reader.result;
      };
      reader.onerror = function (error) {
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
        if (res.statusCode == 200) {
          this.image = res.data.fileName;
          this.submit()
          this.commonInfluncer.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage);
        } else {
        }
      }, error => {
      })
    }
  }

  updateData(){
    if (this.imageUploadData) {
      this.imageUpload()
    }else{
     this.submit()
    }
  }

  onClick() {
    this.show = !this.show;
    this.show1 = true
  } 

  onClick1() {
    this.show1 = !this.show1;
   this.show = false
  } 

  onOtpChange(event : any)  { 
    this.arr = event; 
  }

  verifyNumber() {
    //debugger
    let data = {
      mobile: this.ProfileData.value.mobile,
      mobileCountryCode:  this.countryCode ? this.countrycode : this.countryCode 
      }
      console.log("data",data)
    this.http.post(this.apiList.verifymobileNumber, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        $('#otp').modal('show');
        this.messgae.success(res.message)
        // this.getDetail()
      }
    }, error => {

    })
  }


  otpsubmit() {
    let otpvalue = this.otpform.value.one + this.otpform.value.two + this.otpform.value.three + this.otpform.value.four;
    let data = {
      otp: otpvalue
    }
    this.http.post(this.apiList.verifyOTP, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        $('#otp').modal('hide');
        this.messgae.success(res.message)
        // localStorage.setItem('token', res.data.token)
        $('#otp_success').modal('show');
      } else {
        //alert(res.message)
      }
    }, error => {
      //alert(error.error.message)

    })
  }

  redirect(){
    $('#otp_success').modal('hide');
    // this.router.navigate(['/create-account'])
  }

 
  countryList() {
    console.log(this.ProfileData)
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.ProfileData.value.currentCountry)
    })
  }

  countryCodeList() {
    console.log(this.ProfileData)
    this.http.get('assets/phoneDairy.json').subscribe((res: any) => {
      //console.log(res)
      res.forEach((element: any) => {
        // console.log(this.editForm.value.mobileCountryCode)
        if (element.dialCode == this.ProfileData.value.mobileCountryCode) {
          this.flagCode = element.isoCode
          // console.log(this.flagCode)
        }
      })

    })
  }

  telInputObject(obj) {
    console.log(obj)
    setTimeout(() => {                           //<<<---using ()=> syntax
      console.log(this.flagCode)
      obj.setCountry(this.flagCode)
      var a = JSON.stringify(this.flagCode)
    }, 2000);
  }

  getCitieswithcountries(event) {
    console.log(event)
    if (event?.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    console.log(this.countryvalue)
    this.cities = Object(this.allData[this.countryvalue]);

    // this.editForm.patchValue({
    //   city: this.cities[0]
    // })
    console.log(this.cities)
  }

  onCountryChange1(data) {
    console.log(data)
    this.countryCode = data.dialCode
  }


  

}
