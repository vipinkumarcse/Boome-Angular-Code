import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;
import { HttpHeaders } from '@angular/common/http';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';

@Component({
  selector: 'app-identity-verification',
  templateUrl: './identity-verification.component.html',
  styleUrls: ['./identity-verification.component.css']
})
export class IdentityVerificationComponent implements OnInit {
  fileImage: any;
  imageUploadData: any;
  imgURL: string | ArrayBuffer;
  imageName: any;
  putApi: any;
  fileList: any;

  constructor(public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    new cstmScroll;
  }

  selectImage(event: any) {
    console.log(event);
    var that = this;
    if (event.target.files && event.target.files[0]) {
      this.fileList = event.target.files;
      let file = this.fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      that.common.TransferData(this.fileList)
      reader.readAsDataURL(event.target.files[0]);
      this.imageUploadData = event.target.files[0]
      //  that.imageUpload()
      reader.onload = function () {
        that.imgURL = reader.result;
        that.common.selectImage(that.imgURL)
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
          this.Submit();
        } else {

        }
      }, error => {
        console.log(error)

      })
    }
  }
  Submit() {
    let data = {
      selfie: this.imageName
    }
    this.http.post(this.apiList.influncerSaveSelfie, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.router.navigate(['identity-verify'])
      }else{
  
      }

    }, error => {

    })
  }

  putMethodUploadImage() {
    if (this.fileImage) {
      console.log(this.fileImage)
      let header = new HttpHeaders({
        'Content-Type': this.imageUploadData.type,
      })
      this.http.put(this.putApi, this.fileImage, header).subscribe((res: any) => {
        console.log(res)
      })
    }
  }
}
