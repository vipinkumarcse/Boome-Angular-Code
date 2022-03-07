import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';
import { ClientCampaignCommonFunctionService } from '../ClientCampaigncommon-function.service';

@Component({
  selector: 'app-client-influncer-profile',
  templateUrl: './client-influncer-profile.component.html',
  styleUrls: ['./client-influncer-profile.component.css']
})
export class ClientInfluncerProfileComponent implements OnInit {
  clientprofileData: any;
  editForm: FormGroup;
  allData: any;
  country: string[];
  countryvalue: any;
  cities: any;
  countryCode: any;
  initialConfig: any = { initialCountry: 'ae', preferredCountries: ['ae', 'in'] }
  flagCode: any;
  fileImage: any;
  imageUploadData: any;
  imageName: any;
  imgURL: string | ArrayBuffer;
  countryWhere: any;

  constructor(public formBuilder: FormBuilder, public ClientInfluncerFunction: CommonClientService, public service: ClientCampaignCommonFunctionService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) {
    this.editForm = this.formBuilder.group({
      isAgreeWithTNC: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileCountryCode: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      fromCountry: [Validators.required],
      currentCountry: [Validators.required],
      imageFilename: [''],
    })

  }

  ngOnInit(): void {
    this.ClientInfluncerFunction.clientData.subscribe((res: any) => {
      this.clientprofileData = res
      if (this.clientprofileData != 0) {
        console.log(this.clientprofileData)
        this.editForm.patchValue({
          firstName: res.user.firstName,
          lastName: res.user.lastName,
          mobile: res.user.mobile,
          gender: res.user.gender,
          fromCountry: res.user.fromCountry,
          currentCountry: res.user.currentCountry,
          city: res.user.city,
          mobileCountryCode: res.user.mobileCountryCode
        })
        this.imgURL = res.user.profileImage
        this.countryList();
        this.countryCodeList()
        // this.telInputObject(res.user.mobileCountryCode)
      }
    })
  }

  countryList() {
    console.log(this.editForm)
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res
      this.country = Object.keys(this.allData);
      this.getCitieswithcountries(this.editForm.value.currentCountry)
    })
  }

  countryCodeList() {
    console.log(this.editForm)
    this.http.get('assets/phoneDairy.json').subscribe((res: any) => {
      //console.log(res)
      res.forEach((element: any) => {
        // console.log(this.editForm.value.mobileCountryCode)
        if (element.dialCode == this.editForm.value.mobileCountryCode) {
          this.flagCode = element.isoCode
          // console.log(this.flagCode)
        }
      })

    })
  }

  getCitieswithcountries(event) {
    console.log(event)
    if (event.target) {    // first time select first value of array
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

  telInputObject(obj) {
    console.log(obj)
    setTimeout(() => {                           //<<<---using ()=> syntax
      console.log(this.flagCode)
      obj.setCountry(this.flagCode)
      var a = JSON.stringify(this.flagCode)
    }, 2000);
  }

  updateProfile() {
    let data = {
      firstName: this.editForm.value.firstName,
      lastName: this.editForm.value.lastName,
      gender: this.editForm.value.gender,
      city: this.editForm.value.city,
      fromCountry: this.editForm.value.fromCountry,
      currentCountry: this.editForm.value.currentCountry,
      profileImage: this.imageName,
    }
    this.http.post(this.apiList.clientEditProfile, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.ClientInfluncerFunction.getInfo()
      }
    }, error => {

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
      this.imageUpload()
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





}
