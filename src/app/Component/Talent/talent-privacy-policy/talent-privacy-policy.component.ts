import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-talent-privacy-policy',
  templateUrl: './talent-privacy-policy.component.html',
  styleUrls: ['./talent-privacy-policy.component.css']
})
export class TalentPrivacyPolicyComponent implements OnInit {
  static: any;
  PrivacyPolicyData: any;

  constructor(public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.staticData()
  }
  staticData() {
    this.http.get(this.apiList.staticData+'privacypolicy').subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.PrivacyPolicyData = res.data;
        console.log("this.static",this.PrivacyPolicyData)
      }
    }, error => {

    })
  }

}
