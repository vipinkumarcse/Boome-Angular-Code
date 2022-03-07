import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-client-privacy-policy',
  templateUrl: './client-privacy-policy.component.html',
  styleUrls: ['./client-privacy-policy.component.css']
})
export class ClientPrivacyPolicyComponent implements OnInit {

  PrivacyPolicyData:any = []

  constructor( public apiList : ApiListService , public http : HttpFunctionListService) { }

  ngOnInit(): void {
    this.privacyPolicydata();
  }

  privacyPolicydata(){
    this.http.get(this.apiList.getStaticData + '=privacypolicy').subscribe((res:any) => {
      console.log(res);
      this.PrivacyPolicyData = res.data
      
    })
  }

}
