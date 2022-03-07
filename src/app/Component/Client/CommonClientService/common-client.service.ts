import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonClientService {
  clientData = new BehaviorSubject("0");
  influencerData = new BehaviorSubject("0");

  constructor(public apiList: ApiListService, public http: HttpFunctionListService) {
    this.getInfo() ;
   }
   ngOnInit(){
    this.getInfo() ;
   }

  getInfo() {
    this.http.get(this.apiList.clientProfile).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log(res.data)
       res.data.user.dob= moment(res.data.dateOfBirth).format('DD MMMM, yyyy'),
       this.clientData.next(res.data)
      }
    }, error => {

    })

   // this.clientData.unsubscribe()
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



}
