import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var $: any;
declare var verificationForm: any;

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  list: any;
  intersetForm: FormGroup
  select_interset: any = [];
  country: any;
  imageUploadData: any;
  headshot: any;
  beauty: any;
  fulllenght: any;
  headshotImage: any;
  beautyImage: any;
  fulllenghtImage: any;
  cities: any;
  allData: string[];
  countryvalue: any;
  fileImage: any;
  putApi: any;

  constructor(public messgae: MessageHandlingService,public router:Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    // this.categoryListing()
    this.intersetForm = this.formBuilder.group({
      bio: [],

      completeAddress: [],
      postalCode: [],
      city: [],
      country: ['Afghanistan',[Validators.required]],

      check: ['Centimeter',[Validators.required]],
      heightCm: [],
      heightInches: [],
      jeanLength: [],
      jeanWaist: [],
      shoeSize: [],
      shirt: [],
      ethnicity: [],
      hairColor: [],
      hairLength: [],
      eyesColor: [],
      headShotImage: [],
      beautyShotImage: [],
      fullLengthImage: [],

      accountNumber: [],
      ibanNumber: [],
      routingNumber: [],
      swiftCode: [],
      bankName: [],
      bankAddress: [],

    })
    console.log(this.intersetForm.get('check').value)
  }

  ngOnInit(): void {
    new verificationForm
    $('fieldset input[type="radio"]').click(function () {
      var demovalue = $(this).val();
      $(".height").hide();
      $("#show" + demovalue).show();
    });
    this.categoryListing();
    this.countryList()
  }

  countryList() {
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.intersetForm.value.country)
    })
  }

  getCitieswithcountries(event) {
    if (event.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    this.cities = Object(this.allData[this.countryvalue]);
    this.intersetForm.patchValue({
      city:this.cities[0]
    })
  }

  categoryListing() {
    this.http.get(this.apiList.interestList).subscribe((res: any) => {
      console.log(res)
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

  submit() {
    let data = {
      bio: this.intersetForm.value.bio,
      interests: this.select_interset
    }
    this.http.post(this.apiList.influncerBioInterests, data).subscribe((res: any) => {
      console.log(res)
      if(res.statusCode == 200){
        this.messgae.success(res.message)
      }else{

      }
    })
  }

  submitBantDetail() {
    let data = {
      accountNumber: this.intersetForm.value.accountNumber,
      ibanNumber: this.intersetForm.value.ibanNumber,
      routingNumber: this.intersetForm.value.routingNumber,
      swiftCode: this.intersetForm.value.swiftCode,
      bankName: this.intersetForm.value.bankName,
      bankAddress: this.intersetForm.value.bankAddress,
    }
    this.http.post(this.apiList.influncerBankDetails, data).subscribe((res: any) => {
      if(res.statusCode == 200){
        this.messgae.success(res.message)
      }else{

      }
    })
  }

  submitpersonalDetail() {
    let data = {
      heightCm: this.intersetForm.value.heightCm ? this.intersetForm.value.heightCm:'0',
      heightInches: this.intersetForm.value.heightInches ? this.intersetForm.value.heightInches:'0',
      jeanLength: this.intersetForm.value.jeanLength,
      jeanWaist: this.intersetForm.value.jeanWaist,
      shoeSize: this.intersetForm.value.shoeSize,
      shirt: this.intersetForm.value.shirt,
      ethnicity: this.intersetForm.value.ethnicity,
      hairColor: this.intersetForm.value.hairColor,
      hairLength: this.intersetForm.value.hairLength,
      eyesColor: this.intersetForm.value.eyesColor,
      headShotImage: this.headshotImage,
      beautyShotImage: this.beautyImage,
      fullLengthImage: this.fulllenghtImage,
    }
    this.http.post(this.apiList.influncerPersonalDetails, data).subscribe((res: any) => {
      if(res.statusCode == 200){
        this.messgae.success(res.message)
        this.router.navigate(['/identity-verification'])
      }else{

      }
    })
  }

  submitpersonal() {
    let data = {
      completeAddress: this.intersetForm.value.completeAddress,
      postalCode: this.intersetForm.value.postalCode,
      city: this.intersetForm.value.city,
      country: this.intersetForm.value.country,
    }
    this.http.post(this.apiList.influncerAddress, data).subscribe((res: any) => {
      if(res.statusCode == 200){
        this.messgae.success(res.message)
      }else{

      }
    })
  }


  imageUpload(type: any) {
    if (this.imageUploadData) {
      let data = {
        key: this.imageUploadData.name,
        contentType: this.imageUploadData.type
      }
      this.http.post(this.apiList.ImageUpload, data).subscribe((res: any) => {
        console.log(res)
        if (res.statusCode == 200) {
          this.putApi = res.data.preSignedUrl;
          if (type == 'headshot') {
            this.headshotImage = res.data.fileName;
          } else if (type == 'beauty') {
            this.beautyImage = res.data.fileName;
          } else if (type == 'fulllenght') {
            this.fulllenghtImage = res.data.fileName;
          }
          this.intersetForm.patchValue({
            headShotImage: this.headshotImage,
            beautyShotImage: this.beautyImage,
            fullLengthImage: this.fulllenghtImage,
          })
          this.putMethodUploadImage()
        } else {

        }
      }, error => {
        console.log(error)

      })
    }

  }

  selectImage(event: any, type: any) {   //type = image type\
    var that = this;
    if (event.target.files && event.target.files[0]) {
      let fileList = event.target.files;
      let file = fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0])
      this.imageUploadData = event.target.files[0]
      that.imageUpload(type);
      reader.onload = function () {
        if (type == 'headshot') {
          that.headshot = reader.result;
        } else if (type == 'beauty') {
          that.beauty = reader.result;
        } else if (type == 'fulllenght') {
          that.fulllenght = reader.result;
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
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
}