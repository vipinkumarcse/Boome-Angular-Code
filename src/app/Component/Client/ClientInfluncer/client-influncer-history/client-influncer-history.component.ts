import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-client-influncer-history',
  templateUrl: './client-influncer-history.component.html',
  styleUrls: ['./client-influncer-history.component.css']
})
export class ClientInfluncerHistoryComponent implements OnInit {
  historyList: any;

  constructor( public router: Router, public apiList: ApiListService, public http: HttpFunctionListService,public messgae: MessageHandlingService) { }

  ngOnInit(): void {
    this.history()
  }

  history(){
    this.http.get(this.apiList.clientCampaignHistory).subscribe((res:any)=>{
      console.log(res)
      if(res.statusCode == 200){
        this.historyList = res.data.campaigns
        this.historyList.upcomingCampaign.forEach((element:any) => {
          element.statedTimeLine = moment(element.timeline.startDate).format('MMM DD, yyyy')
          element.endTimeLine = moment(element.timeline.endDate).format('MMM DD, YYYYY')
        });
        this.historyList.completedCampaign.forEach((element:any) => {
          element.statedTimeLine = moment(element.timeline.startDate).format('MMM DD, yyyy')
          element.endTimeLine = moment(element.timeline.endDate).format('MMM DD, YYYYY')
        });
        this.historyList.ongoingCampaign.forEach((element:any) => {
          element.statedTimeLine = moment(element.timeline.startDate).format('MMM DD, yyyy')
          element.endTimeLine = moment(element.timeline.endDate).format('MMM DD, YYYYY')
        });

      }
    },error=>{
      
    })
  }

}
