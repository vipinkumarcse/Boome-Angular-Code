import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { HttpHeaders } from '@angular/common/http';
import {MatDatepicker} from '@angular/material/datepicker';
// import * as _moment from 'moment';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {loadStripe, StripeElement} from '@stripe/stripe-js';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
//  import {Stripe} from '@stripe/stripe-js';


// import { MomentDateAdapter } from '@angular/material-moment-adapter';

import {
  StripeService,
  StripeCardComponent,
} from 'ngx-stripe';
import {AfterViewInit,forwardRef,Input,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR,
} from '@angular/forms';
// tslint:disable-next-line:no-duplicate-imports
import { Moment } from 'moment';
declare var $: any;
// const moment = moment;

export const MONTH_MODE_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};




@Component({
  selector: 'app-talent-profile',
  templateUrl: './talent-profile.component.html',
  styleUrls: ['./talent-profile.component.css']
})
export class TalentProfileComponent implements OnInit {
  talentData: FormGroup;
  stripeForm: FormGroup;
  profileData: any;
  imgURL: any;
  list: any = [];
  plans:any = []
  month:number = 11
  year:number = 2027
  cardsData:any = []
  select_interset: any = [];
  fileImage: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  imageUploadData: any;
  imageName: any;
  putApi: any;
  country: string[];
  countryvalue: any;
  checked: boolean;
  cities: any;
  detail: any;
  countryCode: any;
  flagCode: any;
  private httpClient: HttpClient
  talentprofileData: any;
  countrycode: any;
  allData: any;
  planExpireDate:any
  subscription: any;
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

  constructor(public common:CommonFunctionService, private stripeService: StripeService,
    private fb: FormBuilder, private handler: HttpBackend, 
     public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { 
    this.talentData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator.bind(this)]],
      categoryselect: [],
      mobileCountryCode: [''],
      mobile: ['', Validators.required],
      image: [''],
      bio: [''],
    });

    this.stripeForm = this.fb.group({
      number: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      exp_date:  [(moment()), Validators.required],
      name: ['', Validators.required],
    });
 
    this.httpClient = new HttpClient(handler);
    this.categoryListing();
    this.getDatasidebar()
    this.getCardList()
    // this.buy()
    this.getAllPlans()
    
  }

  ngOnInit(): void {
    this.common.subject.subscribe((res: any) => {
      this.profileData = res
      this.subscription = this.profileData.user?.subscription
      if(this.subscription?.endDate != null){
        this.planExpireDate = moment(this.subscription?.endDate).format('DD MMM yyyy')
      }
    
      if (this.profileData != 0) {
        console.log("this.influencerprofileData",this.profileData)
        console.log("res",res);
        res.user.categories.forEach((element:any) => {
          this.list.forEach((element1:any,index:any) => {
            if(element1._id == element._id ){
              element1.checked = true
              this.select_interset.push(element1._id)
          }else{
            }
          });
        });
        
        this.talentData.patchValue({
          firstName: res.user.firstName,
          lastName: res.user.lastName,
          mobile: res.user.mobile,
          email: res.user.email,
          bio: res.user.bio,
          mobileCountryCode : res.user.mobileCountryCode,
        })
        this.countrycode = res.user.mobileCountryCode
        this.imgURL = res.user.profileImage
        this.countryList();
        this.countryCodeList()
        // this.telInputObject(res.user.mobileCountryCode)
      }
    })

    let date = new Date()
    this.stripeForm.patchValue({
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

  // getData() {
  //   this.http.get(this.apiList.talnetMyProfile).subscribe((res: any) => {
  //     console.log(res)
  //     if (res.statusCode == 200) {
  //       this.profileData = res.data;

  //       console.log("this.apiList.talnetMyProfile", this.profileData);
        
  //       this.talentData.patchValue({
  //         firstName: res.data.user.firstName,
  //         lastName: res.data.user.lastName,
  //         mobileCountryCode: res.data.user.mobileCountryCode,
  //         mobile: res.data.user.mobile,
  //         email: res.data.user.email,
  //         bio: res.data.user.bio,
  //       })
  //       this.imgURL = res.data.user.profileImage
  //       this.profileData.user.categories.forEach(element => {
  //         this.select_interset.push(element._id)
  //       });

  //     }
  //   }, error => {

  //   })
  // }

  categoryListing() {
    this.http.get(this.apiList.categoryList).subscribe((res: any) => {
      this.common.getInfo()
      if (res.statusCode == 200) {
        this.list = res.data.categories;
        }
    })
  }

  // select(event: any, value: any) {
  //   if (event.target.checked) {
  //     this.select_interset.push(value)
  //   } else {
  //     let index = this.removeCheckedFromArray(value);
  //     this.select_interset.splice(index, 1);
  //   }
  //   // console.log(this.select_interset)
  // }

  removeCheckedFromArray(checkbox: String) {
    return this.select_interset.findIndex((category) => {
      return category === checkbox;
    })
  }


  selectImage(event: any) {
    // console.log(event);
    var that = this;
    if (event.target.files && event.target.files[0]) {
      let fileList = event.target.files;
      let file = fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.imageUploadData = event.target.files[0]
      that.imageUpload()
      reader.onload = function () {
        // console.log(reader.result)
        that.imgURL = reader.result;
      };
      reader.onerror = function (error) {
        // console.log('Error: ', error);
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
        // console.log(res)
        if (res.statusCode == 200) {
          this.imageName = res.data.fileName;
          this.putApi = res.data.preSignedUrl;
          this.putMethodUploadImage()
          // this.talentSignupData.patchValue({
          //   image:res.data.fileName 
          // })
        } else {

        }
      }, error => {
        // console.log(error)

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
    }).then(jsonResponse => {
    }).catch(error => {
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

  saveChanges() {
    for(var i=0; i<this.select_interset.length; ++i) {
      for(var j=i+1; j<this.select_interset.length; ++j) {
          if(this.select_interset[i] === this.select_interset[j])
              this.select_interset.splice(j--, 1);
      }
  }
    let data = {
      firstName: this.talentData.value.firstName,
      lastName: this.talentData.value.lastName,
      mobileCountryCode: this.talentData.value.mobileCountryCode,
      mobile: this.talentData.value.mobile,
      email: this.talentData.value.email,
      bio: this.talentData.value.bio,
      profileImage:this.imageName,
      categories:this.select_interset
    }
    this.http.post(this.apiList.talenteditAccount, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        // this.common.publishSomeData("editData")
        // this.getData();
        this.common.getInfo()
       this.getDatasidebar()
      }

    }, error => {

    })
  }


  getDatasidebar(){     
    this.http.get(this.apiList.talentMyInfo).subscribe((res:any)=>{
      if (res.statusCode == 200) {
        // console.log("this.apiList.talentMyInfo",res.data)
        this.detail = res.data;
        // console.log("this.apiList.talentMyInfo",this.detail)
      }
    },error=>{

    })
  }


  onCountryChange1(data) {
    // console.log(data)
    this.countryCode = data.dialCode
  }

  telInputObject(obj) {
    // console.log(obj)
    setTimeout(() => {                           //<<<---using ()=> syntax
      // console.log(this.flagCode)
      obj.setCountry(this.flagCode)
      var a = JSON.stringify(this.flagCode)
    }, 2000);
  }

  countryList() {
    // console.log(this.talentData)
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.talentData.value.currentCountry)
    })
  }

  getCitieswithcountries(event) {
    // console.log(event)
    if (event?.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    // console.log(this.countryvalue)
    this.cities = Object(this.allData[this.countryvalue]);
    // console.log(this.cities)
  }

  countryCodeList() {
    // console.log(this.talentData)
    this.http.get('assets/phoneDairy.json').subscribe((res: any) => {
      //console.log(res)
      res.forEach((element: any) => {
        // console.log(this.editForm.value.mobileCountryCode)
        if (element.dialCode == this.talentData.value.mobileCountryCode) {
          this.flagCode = element.isoCode
          // console.log(this.flagCode)
        }
      })

    })
  }

  getCardList(){
    this.http.get(this.apiList.getAllCards).subscribe((res: any) => {
      if (res.statusCode == 200) {
      this.cardsData = res.data.cards.cards.data
      console.log(" this.cardsData", this.cardsData);
      }
    }, error => {
    })
  }

  delcard(id:any){
    this.http.delete(this.apiList.delCards + id , "").subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
      console.log(" this.cardsData", this.cardsData);
      this.getCardList()
      }
    }, error => {
    })

  }

  saveCard(){
     let data = {
      tokenId : this.stripeToken,
      name : this.holderName
    }
    this.http.post(this.apiList.saveCards , data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        $('#add_card').modal('hide');
        this.messgae.success(res.message)
      console.log(" this.cardsData", this.cardsData);
  
      this.getCardList()
      }
    }, error => {
    })

  }


  onChange({ type, event }) {
    if (type === 'change') {
      console.log(type, event);
      
      this.stripeCardValid = event.complete;
    }
  }

  // addCard() {
  //   this.stripeService
  //     .createToken(this.card.getCard(), { 
  //       name: this.paymentForm.value.name })
  //     .subscribe((result) => {
  //       this.paymentForm.reset()
  //       if (result.token) {
  //          console.log(result);
  //          this.stripeToken = result.token.id
  //          this.holderName = result.token.card.name
  //          console.log(result.token.id);
  //          console.log(result.token.card.name);
  //          this.saveCard()
           
  //       } else if (result.error) {
  //         this.messgae.error(result.error.message)
  //         console.log(result.error.message);
  //       }
  //     });
  // }

//   addCard() {
//     this.http.post( 'https://api.stripe.com/v1/tokens' ,{ 
//       'card[name]': 'dfsdfsd' ,
//      'card[number]': '4242424242424242' ,
//       'card[cvc]': '444' ,
//       'card[exp_month]': '4' ,
//       'card[exp_year]': '24' ,
//       'card[address_zip]': '44444'
// })
//       .subscribe((result) => {
//         this.paymentForm.reset()
//         if (result) {
//            console.log(result);
//           //  this.stripeToken = result.token.id
//           //  this.holderName = result.token.card.name
//           //  console.log(result.token.id);
//           //  console.log(result.token.card.name);
//            this.saveCard()
           
//         } else if (result) {
//           // this.messgae.error(result.error.message)
//           // console.log(result.error.message);
//         }
//       });
//   }


pay(){
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_2RbpFNKPWSAk0a1xP9w081pT");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", "machine_identifier=pEwXW7nnQRJ2oqn0yz0Lnd3SES0qNgG6y7NR4wFUJCqAk3wUrKXHgHRP70CSkNqfQjQ%3D; private_machine_identifier=pN1k%2FftkYLl8yNIOW5enOe7OzbEG%2FW3xC%2FtQMkogWc5sTGyDRQ0ozlEBlJ6eKk1OSH4%3D; __stripe_orig_props=%7B%22referrer%22%3A%22%22%2C%22landing%22%3A%22https%3A%2F%2Fpay.stripe.com%2Freceipts%2Facct_1GnOeWF2vcQTxlmd%2Fch_1GnQkdF2vcQTxlmdiQnJm4Et%2Frcpt_HM92azA3BQVz2J78soXGJtwspblItcq%22%7D");

  let urlencoded = new URLSearchParams();
  urlencoded.append("card[number]", this.stripeForm.value.number);
  urlencoded.append("card[cvc]", this.stripeForm.value.cvc);
  urlencoded.append("card[exp_month]", '10');
  urlencoded.append("card[exp_year]", '2025');
  urlencoded.append("card[name]", this.stripeForm.value.name);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
  };

  fetch("https://api.stripe.com/v1/tokens", requestOptions)
    .then(response => response.json())
    .then((result) => {
      console.log(result);
  this.stripeToken = result.id
  this.holderName = result.card.name
     this.saveCard()
    
      
    })
    
}

/* ======Stripe ======*/

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
        this.saveCard()
      } else if (result.error) {
        // Error creating the token
        console.log(result.error.message);
      }
    });
}


getAllPlans(){
  this.http.get(this.apiList.getAllSubscriptionPlans).subscribe((res: any) => {
    if (res.statusCode == 200) {
    this.plans = res.data.plans
    console.log(" this.plans", this.plans);
    }
  }, error => {
  })

}

buyScription(){
  let data = {
    // firstName: this.talentData.value.firstName,
    // lastName: this.talentData.value.lastName,
    priceId: "price_xxxxxxxxxxxx",
  planType: "yearly, half_yearly , free , monthly",
  cardId: "card_xxxxxxxxxx",
  subscriptionId: "subs_xxxxxxxxxxxx"
  }
  this.http.post(this.apiList.updatePlans, data).subscribe((res: any) => {
    if (res.statusCode == 200) {
      this.messgae.success(res.message)
    }

  }, error => {

  })

}






}


