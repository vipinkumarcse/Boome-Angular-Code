import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng2TelInputModule } from 'ng2-tel-input';
import * as moment from 'moment';
import { FormBuilder, FormControl,FormGroup,  Validators } from '@angular/forms';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {loadStripe, StripeElement} from '@stripe/stripe-js';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

import {
  StripeService,
  StripeCardComponent,
} from 'ngx-stripe';
declare var $: any;



@Component({
  selector: 'app-client-talent-profile',
  templateUrl: './client-talent-profile.component.html',
  styleUrls: ['./client-talent-profile.component.css']
})
export class ClientTalentProfileComponent implements OnInit {
  // countryCode: any;
  flagCode: any;
  countryvalue: any;
  cities: any = []
  allData: any;
  ProfileData: any;
  country: string[];
  imageUploadData: any;
  image: any;
  stripeForm: FormGroup;

  imageNAME: any;
  fileImage: any;
  countryCode: string;
  countrycode:any;
  clientData:any
  list: any=[];
  clientprofileData: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  subscription: any;
  planExpireDate:any
  paymentForm: FormGroup;
  stripeCardValid: boolean = false;
  stripeToken:any
  holderName:any

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };





  constructor(public messgae: MessageHandlingService, 
    private stripeService: StripeService, 
  public ClientInfluncerFunction: CommonClientService , public formBuilder: FormBuilder,  public apiList: ApiListService, public http: HttpFunctionListService) { 
    this.ProfileData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      mobileCountryCode: ['', Validators.required],
      mobile: ['', Validators.required],
      image: [''],
      currentDate:[],
      gender: ['male', [Validators.required]],
      city: ['', [Validators.required]],
      fromCountry: ['', [Validators.required]],
      currentCountry: ['', [Validators.required]],
    });

    this.stripeForm = this.formBuilder.group({
      number: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      exp_date:  [(moment()), Validators.required],
      name: ['', Validators.required],
    });
    let date = new Date()
    this.ProfileData.patchValue({
      currentDate:date
    });
  }

  ngOnInit(): void {

    this.ClientInfluncerFunction.clientData.subscribe((res:any)=>{
      this.clientprofileData = res
   console.log(this.clientprofileData)
      });
      this.ClientInfluncerFunction.clientData.subscribe((res: any) => {
        this.clientData = res
        this.subscription = this.clientData?.user?.subscription
        console.log("this.subscription",this.subscription);
        
        if(this.subscription?.endDate != null){
          this.planExpireDate = moment(this.subscription?.endDate).format('DD MMM yyyy')
        }
        if (this.clientData != 0) {
          console.log("this.influencerprofileData",this.clientData)
          console.log("res",res);
          this.ProfileData.patchValue({
            firstName: res.user.firstName,
            lastName: res.user.lastName,
            mobile: res.user.mobile,
            mobileCountryCode : res.user.mobileCountryCode,
            gender :  res.user.gender,
            city: res.user.city ,
            fromCountry: res.user.fromCountry,
            currentCountry: res.user.currentCountry,
          })
          this.countrycode = res.user.mobileCountryCode
          this.imageNAME = res.user.profileImage
          this.countryList();
          this.countryCodeList()
          // this.telInputObject(res.user.mobileCountryCode)
        }
      })
  }


  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value != null) {
      if (!(control.value.toLowerCase().match('^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$'))) {
        return { invalidEmail: true };
      }
    }
  }


  // select(event: any, value: any) {
  //   if (event.target.checked) {
  //     this.select_interset.push(value)
  //   } else {
  //     let index = this.removeCheckedFromArray(value);
  //     this.select_interset.splice(index, 1);
  //   }
  // }

  // removeCheckedFromArray(checkbox: String) {
  //   return this.select_interset.findIndex((category) => {
  //     return category === checkbox;
  //   })
  // }

  // onCountryChange(data) {
  //  this.countryCode = data.dialCode
  // }

  hasError(event) {
 
  }
 

  submit() {
let data = {
      lastName: this.ProfileData.value.lastName,
      firstName: this.ProfileData.value.firstName,
      email: this.ProfileData.value.email,
      mobile: this.ProfileData.value.mobile,
      mobileCountryCode: this.countryCode ?  this.countrycode : this.countryCode  , 
      profileImage: this.image ,
      gender : this.ProfileData.value.gender,
      city: this.ProfileData.value.city,
      fromCountry: this.ProfileData.value.fromCountry,
      currentCountry: this.ProfileData.value.currentCountry,
    }
    this.http.post(this.apiList.editProfile, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.ClientInfluncerFunction.clientData
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
          this.ClientInfluncerFunction.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage);
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

  createToken(): void {
    const name = this.stripeForm.get('name').value;
    console.log(this.card.element)
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token);
          this.stripeToken = result.token.id
          this.holderName = result.token.card.name
          console.log(result.token.id);
          console.log(result.token.card.name);
          console.log(  this.stripeToken);
          console.log(this.holderName);
          // this.saveCard()
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  onChange({ type, event }) {
    if (type === 'change') {
      console.log(type, event);
      
      this.stripeCardValid = event.complete;
    }
  }

}
