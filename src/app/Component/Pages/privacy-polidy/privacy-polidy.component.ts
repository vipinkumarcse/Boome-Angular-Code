import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';


@Component({
  selector: 'app-privacy-polidy',
  templateUrl: './privacy-polidy.component.html',
  styleUrls: ['./privacy-polidy.component.css']
})
export class PrivacyPolidyComponent implements OnInit {

  PrivacyPolicyData: any;

  // topBar={name:'Privacy Policy',icon:'assets/images/user_icn.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}
  topBar={name:'Privacy Policy',icon:'assets/images/user_icn.svg', 
  // date:new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}

constructor( 
  private datePipe:DatePipe,   public apiList: ApiListService,
   public http: HttpFunctionListService){}
  ngOnInit(): void {
    this.privacyPolicy();
  }

  privacyPolicy() {
    this.http.get(this.apiList.staticData + 'privacypolicy').subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log(res)
        this.PrivacyPolicyData = res.data
        
      }
    }, error => {

    })
  }

}
