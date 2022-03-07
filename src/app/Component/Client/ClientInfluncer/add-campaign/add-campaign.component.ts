import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientCampaignCommonFunctionService } from '../ClientCampaigncommon-function.service';
import * as moment from 'moment';


@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {
  campaignAdd: boolean = true
  campaignFor: boolean = false
  categorgiesList: any;
  fileImage: any;
  imageUploadData: any;
  imgURL: any;
  imageName: any;
  CreateCampaign: FormGroup;
  allData: any;
  country: string[];
  countryvalue: any;
  cities: any;
  step = true

  constructor(public service: ClientCampaignCommonFunctionService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.categories();
    this.countryList();
 
  }

  ngOnInit(): void {
    this.CreateCampaign = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      completeAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      paymentType: ['AED', [Validators.required]],
      amount: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
     campaignImage: ['', [Validators.required]],
      // campaignFor: "facebook or instagram or youtube or tiktok",
      // type: "post or story or both",
      voucherTitle: [''],
      voucherDescription: [''],
      select: ['Voucher'],
      currentDate:[]
    })
    let date = new Date()
    this.CreateCampaign.patchValue({
      currentDate:date
    })
  }

  categories() {
    this.http.get(this.apiList.categoryList).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.categorgiesList = res.data.categories;
        console.log(this.categorgiesList)
        this.CreateCampaign.patchValue({
          category:res.data.categories[0]._id
        })
      }
    }, error => {

    })
  }

  countryList() {
    this.http.get('assets/countries.json').subscribe((res: any) => {
      this.allData = res

      this.country = Object.keys(this.allData);
      //console.log(this.country)
      this.CreateCampaign.patchValue({
        country:this.country[0]
      })
      this.getCitieswithcountries(this.CreateCampaign.value.country)
    })
  }

  getCitieswithcountries(event) {
    if (event.target) {    // first time select first value of array
      this.countryvalue = event.target.value
    } else {
      this.countryvalue = event
    }
    this.cities = Object(this.allData[this.countryvalue]);
    this.CreateCampaign.patchValue({
      city: this.cities[0]
    })
   // console.log(this.cities)
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
        console.log(that.imgURL)
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
          // this.imageName = res.data.fileName;
          this.imageName = res.data.fileName;

          console.log(this.imageName)
          this.common.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage)
          this.CreateCampaign.patchValue({
            campaignImage:res.data.fileName 
          })
        } else {
        }
      }, error => {
        console.log(error)

      })
    }
  }

  // {
  //   "title": "campaign title",
  //   "description": "campaign description",
  //   "category": "category id",
  //   "completeAddress": "campaign address",
  //   "city": "campaign city",
  //   "country": "campaign country",
  //   "location": [
  //     "lng",
  //     "lat"
  //   ],
  //   "paymentType": "cash or voucher",
  //   "currencyType": "$",
  //   "amount": "$",
  //   "startDate": "dd-mm-yyyy",
  //   "endDate": "dd-mm-yyyy",
  //   "campaignImage": "filename",
  //   "campaignFor": "facebook or instagram or youtube or tiktok",
  //   "type": "post or story or both",
  //   "voucherTitle": "in case of voucher, title is required",
  //   "voucherDescription": "in case of voucher, description is required",
  //   "posts": [
  //     {
  //       "type": "image,video",
  //       "file": "image or video link",
  //       "description": "any string",
  //       "guidelines": "any string",
  //       "hashtags": [],
  //       "mentions": []
  //     }
  //   ],
  //   "stories": [
  //     {
  //       "type": "image,video",
  //       "file": "image or video link",
  //       "description": "any string",
  //       "guidelines": "any string",
  //       "hashtags": [],
  //       "mentions": []
  //     }
  //   ]
  // }

  next(){
 if(moment(this.CreateCampaign.value.startDate).format('DD-MM-yyyy') < moment(this.CreateCampaign.value.endDate).format('DD-MM-yyyy')){
  this.step = false
  this.service.camapignData(this.CreateCampaign.value)
 }else{
  return this.messgae.error('Invalid Date')
 }
   
   // this.router.navigate(['/add-campaign-post'])
  }

}
