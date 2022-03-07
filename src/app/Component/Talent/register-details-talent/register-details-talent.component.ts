import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;
declare var otpVerification: any;


@Component({
  selector: 'app-register-details-talent',
  templateUrl: './register-details-talent.component.html',
  styleUrls: ['./register-details-talent.component.css']
})
export class RegisterDetailsTalentComponent implements OnInit {
  Form: FormGroup;
  putApi: RequestInfo;
  fileImage: BodyInit;
  imageUploadData: any;
  imgURL: string | ArrayBuffer;
  imageName: any;

  constructor(public router:Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      dateOfBirth: [],
      experience: [],
      pricePerHour: [],
      currencyType: [],
      video: [],
      passport: [],
      otherDocs: [],
      check: ['vedio']
    })
  }

  ngOnInit(): void {
    new cstmScroll;
    new otpVerification;

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

  reset(value:any){
    this.imageName = ''
    this.imgURL =''
    this.Form.patchValue({
      check:value
    })
  }

  submit(){
    let doc = this.Form.value.check = 'vedio'
    let data ={
      dateOfBirth:this.Form.value.dateOfBirth,
      experience: this.Form.value.experience,
      pricePerHour: this.Form.value.pricePerHour,
      currencyType:this.Form.value.currencyType,
      video: this.imageName,
      passport: this.imageName,
      otherDocs: this.imageName,
      check: ['vedio']
    }
    this.http.post(this.apiList.talnetSaveDoc,data).subscribe((res:any)=>{
      if (res.statusCode == 200) {
        this.router.navigate(['/choose-plan-talent'])
      }
    })
  }

}
