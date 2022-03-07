import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;

@Component({
  selector: 'app-identity-confirm',
  templateUrl: './identity-confirm.component.html',
  styleUrls: ['./identity-confirm.component.css']
})
export class IdentityConfirmComponent implements OnInit {
  imageName: any;
  putApi: any;
  imageUploadData: any;
  fileImage: any;
  file: any;
  image: any;

  constructor(public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) { 
    console.log(this,this.common.returnData())
  }

  ngOnInit(): void {
    new cstmScroll;
    console.log(this.common.returnData())
    this.file = this.common.returnData();
    this.image = this.common.returnImage();
    console.log( this.image)
  }

  imageUpload() {
    // if (this.imageUploadData) {
      let data = {
        key: this.file[0].name,
        contentType: this.file[0].type
      }
      console.log(data)
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
   // }
  }

  Submit() {
    console.log(this.imageName)
    let data = {
      selfie: this.imageName
    }
    this.http.post(this.apiList.influncerSaveSelfie, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.router.navigate(['/connect'])
      }else{
        this.router.navigate(['/connect'])
      }

    }, error => {

    })
  }

  putMethodUploadImage() {
    if (this.fileImage) {
      console.log(this.fileImage)
      let header = new HttpHeaders({
        'Content-Type': this.file[0].type,
      })
      this.http.put(this.putApi, this.file[0], header).subscribe((res: any) => {
        console.log(res)
      })
    }
  }

}
