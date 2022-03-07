import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-settings-personal-detail',
  templateUrl: './settings-personal-detail.component.html',
  styleUrls: ['./settings-personal-detail.component.css']
})
export class SettingsPersonalDetailComponent implements OnInit {
  ProfileData: FormGroup
  headshot: any;
  beautyshot: any;
  fullshot: any;


  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar = { name: 'Settings', icon: 'assets/images/blue_settings.svg', date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() }
  fileImage: any;
  imageUploadData: any;
  headshotImage: any;
  beautyImage: any;
  fulllenghtImage: any;


  constructor(public common: CommonFunctionService, private datePipe:DatePipe, public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.ProfileData = this.formBuilder.group({
      radioSelection: ['Centimeter'],
      heightCm: [''],
      heightInches: [''],
      jeanLength: [''],
      jeanWaist: [''],
      shoeSize: [''],
      shirt: [''],
      ethnicity: [''],
      hairColor: [''],
      hairLength: [''],
      eyesColor: [''],
    })
    this.getData()
  }

  ngOnInit(): void {
  }

  getData() {
    this.http.get(this.apiList.influncerMyPersonalDetail).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.ProfileData.patchValue({
          radioSelection: (res.data.user?.heightCm != '' && res.data.user?.heightCm != undefined) ? 'Centimeter' : 'Inches',
          heightCm: res.data.user?.heightCm ? res.data.user?.heightCm:'0',
          heightInches: res.data.user?.heightInches ? res.data.user?.heightInches:'0',
          jeanLength: res.data.user?.jeanLength,
          jeanWaist: res.data.user?.jeanWaist,
          shoeSize: res.data.user?.shoeSize,
          shirt: res.data.user?.shirt,
          ethnicity: res.data.user?.ethnicity,
          hairColor: res.data.user?.hairColor,
          hairLength: res.data.user?.hairLength,
          eyesColor: res.data.user?.eyesColor,
        })
        this.headshot = res.data.user?.headShotImage,
          this.beautyshot = res.data.user?.beautyShotImage,
          this.fullshot = res.data.user?.fullLengthImage,

          console.log(this.ProfileData.value)
      }
    }, error => {

    })
  }

  submit() {
    let data = {
      heightCm: this.ProfileData.value.heightCm ? this.ProfileData.value.heightCm : '0',
      heightInches: this.ProfileData.value.heightInches ? this.ProfileData.value.heightInches:'0',
      jeanLength: this.ProfileData.value.jeanLength,
      jeanWaist: this.ProfileData.value.jeanWaist,
      shoeSize: this.ProfileData.value.shoeSize,
      shirt: this.ProfileData.value.shirt,
      ethnicity: this.ProfileData.value.ethnicity,
      hairColor: this.ProfileData.value.hairColor,
      hairLength: this.ProfileData.value.hairLength,
      eyesColor: this.ProfileData.value.eyesColor,
      headShotImage: this.headshotImage,
      beautyShotImage: this.beautyImage,
      fullLengthImage: this.fulllenghtImage
    }
    this.http.post(this.apiList.influncerEditPersonalDetails, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.getData()
      }
    }, error => {

    })
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
          that.beautyshot = reader.result;
        } else if (type == 'fulllenght') {
          that.fullshot = reader.result;
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  imageUpload(type: any) {
    if (this.imageUploadData) {
      let data = {
        key: this.imageUploadData.name,
        contentType: this.imageUploadData.type
      }
      this.http.post(this.apiList.ImageUpload, data).subscribe((res: any) => {
        if (res.statusCode == 200) {
          if (type == 'headshot') {
            this.headshotImage = res.data.fileName;
          } else if (type == 'beauty') {
            this.beautyImage = res.data.fileName;
          } else if (type == 'fulllenght') {
            this.fulllenghtImage = res.data.fileName;
          }
          this.common.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage)
        } else {
        }
      }, error => {
        console.log(error)
      })
    }
  }
}