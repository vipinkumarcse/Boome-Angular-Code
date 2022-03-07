import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import {  FormControl,FormGroup,  Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';


@Component({
  selector: 'app-talent-setting-personal-details',
  templateUrl: './talent-setting-personal-details.component.html',
  styleUrls: ['./talent-setting-personal-details.component.css']
})
export class TalentSettingPersonalDetailsComponent implements OnInit {
  talentData: any;
  Form: FormGroup;
  putApi: RequestInfo;
  fileImage: BodyInit;
  imageUploadData: any;
  imgURL: string | ArrayBuffer;
  imageName: any;
  constructor(public apiList: ApiListService, public messgae: MessageHandlingService, public http: HttpFunctionListService, public common: CommonFunctionService, public formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.talentData = this.formBuilder.group({
      dateOfBirth: [''],
      experience: [''],
      pricePerHour: [''],
      currencyType: [''],
      video: [],
      passport: [],
      otherDocs: [],
      check: ['video']
    })

    let date = new Date()
    this.talentData.patchValue({
      currentDate:date
    })
    this.getdocData()
  }

  getdocData() {
    var that =this;
    this.http.get(this.apiList.talentgetPersonalDoc).subscribe((res: any) => {
      console.log("thi.ytalent",res)
      if (res.statusCode == 200) {
        this.talentData.patchValue({
          dateOfBirth: res.data.user.dateOfBirth, 
          experience: res.data.user.experience,
          pricePerHour: res.data.user.pricePerHour,
          currencyType: res.data.user.currencyType,
          video: res.data.user.docs.video,
      passport: res.data.user.docs.passport,
      otherDocs: res.data.user.docs.other,
      // check: ['video']
      
        })
        that.imgURL = res.data.user.docs.video ,
        that.imgURL = res.data.user.docs.passport , 
        that.imgURL = res.data.user.docs.other
        console.log(that.imgURL)


      }

    }, error => {

    })
  }

  saveChanges() {
    let data = {
      dateOfBirth: moment(this.talentData.value.dateOfBirth).format('DD-MM-yyyy'),
      experience: this.talentData.value.experience,
      pricePerHour: this.talentData.value.pricePerHour,
      currencyType: this.talentData.value.currencyType,
      video: this.imageName,
      passport: this.imageName,
      otherDocs: this.imageName,
      check: ['vedio']
      // video: filename,
      // passport: passport filename,
      // other
    }
    this.http.post(this.apiList.talentEditPersonalDoc, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        console.log("edit data" , res);
        
        this.messgae.success(res.message)
        this.getdocData()
      }
    }, error => {

    })
  }


  reset(value:any){
    this.imageName = ''
    this.imgURL =''
    this.talentData.patchValue({
      check:value
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
      that.imageUpload()
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
          this.putApi = res.data.preSignedUrl;
          this.putMethodUploadImage()
          // this.talentData.patchValue({
          //   image:res.data.fileName 
          // })
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
    }).then(jsonResponse => {
    }).catch(error => {
    })
  }

 

  // selectImage(event: any) {
  //   console.log(event);
  //   var that = this;
  //   if (event.target.files && event.target.files[0]) {
  //     let fileList = event.target.files;
  //     let file = fileList[0];
  //     that.fileImage = file;
  //     let reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     this.imageUploadData = event.target.files[0]
  //     that.imageUpload()
  //     reader.onload = function () {
  //       console.log(reader.result)
  //       that.imgURL = reader.result;
  //     };
  //     reader.onerror = function (error) {
  //       console.log('Error: ', error);
  //     };
  //   }
  // }

}
