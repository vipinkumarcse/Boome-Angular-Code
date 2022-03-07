import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class Common_FunctionService {
  profileData: any;
  subject = new BehaviorSubject("0");
  address = new BehaviorSubject("0");


  constructor(public apiList: ApiListService, public http: HttpFunctionListService) {
    this.getInfluencerInfo()
    this.addressdetails()
   }

   getInfluencerInfo() {
    this.http.get(this.apiList.influncerMyProfile).subscribe((res: any) => {
      if (res.statusCode == 200) {
       res.data.user.dob= moment(res.data.dateOfBirth).format('DD MMMM, yyyy'),
       this.subject.next(res.data)
      }
    }, error => {

    })
  }

  addressdetails(){
    this.http.get(this.apiList.influncerSavedAddress).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.address.next(res.data)
      }
    },error =>{
      
    })
  }

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


  // ReturnProfileData(){
  //  console.log(this.subject )
  //   return this.subject 
  // }
}
