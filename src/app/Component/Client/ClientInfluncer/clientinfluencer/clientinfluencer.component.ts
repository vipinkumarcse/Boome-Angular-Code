import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Router } from '@angular/router';
import { ClientCampaignCommonFunctionService } from '../ClientCampaigncommon-function.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';

@Component({
  selector: 'app-clientinfluencer',
  templateUrl: './clientinfluencer.component.html',
  styleUrls: ['./clientinfluencer.component.css']
})
export class ClientinfluencerComponent implements OnInit {
  campaignList: any;
  clientprofileData: any;

  constructor(public ClientInfluncerFunction: CommonClientService, public service: ClientCampaignCommonFunctionService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.ClientInfluncerFunction.clientData.subscribe((res:any)=>{
      this.clientprofileData = res.user
      })
    this.list()
  }

  list(){
    this.http.get(this.apiList.clientCampiagnList).subscribe((res:any)=>{
      console.log(res)
      if(res.statusCode == 200){
        this.campaignList = res.data.campaigns
      }
    },error=>{

    })
  }

}
