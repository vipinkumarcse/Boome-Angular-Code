import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiListService } from '../Api/api-list.service';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';


import { HttpFunctionListService } from '../Http/http-function-list.service';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {
  fileDetail: any;
  image: any;
  detail: any;
  signUpData: any;
  subject = new BehaviorSubject("0");



  constructor(public apiList: ApiListService, public http: HttpFunctionListService) {
    // this.getData()
    this.getInfo()
  }
  private fooSubject = new Subject<any>();

  TransferData(filedata: any) {
    this.fileDetail = filedata
  }

  returnData() {
    return this.fileDetail
  }

  selectImage(image: any) {
    this.image = image
  }

  returnImage() {
    return this.image
  }

  /* event for profile update */
  publishSomeData(data: any) {
    console.log(data)
    this.fooSubject.next(data);
  }

  getObservable(): Subject<any> {
    return this.fooSubject;
  }

  /* client data for signup */

  getSignupData(data: any) {
    this.signUpData = data;
  }

  returnSignupData(){
    return this.signUpData
  }


  /* Put method for upload image */
  putMethodUploadImage(api:any,headerType:any, file:any) {
    fetch(api, {
      method: 'put',
      headers: {
        'Content-Type': headerType,
      },
      body: file
    }).then(response => {
      console.log(response)
    }).then(jsonResponse => {
       console.log(jsonResponse);
    }).catch(error => {
       console.log(error)
    })
  }

  getInfo() {
    this.http.get(this.apiList.talnetMyProfile).subscribe((res: any) => {
      if (res.statusCode == 200) {
       res.data.user.dob= moment(res.data.dateOfBirth).format('DD MMMM, yyyy'),
       this.subject.next(res.data)
      }
    }, error => {

    })
  }

  


}
