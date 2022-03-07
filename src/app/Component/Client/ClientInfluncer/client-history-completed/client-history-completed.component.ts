import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-history-completed',
  templateUrl: './client-history-completed.component.html',
  styleUrls: ['./client-history-completed.component.css']
})
export class ClientHistoryCompletedComponent implements OnInit {
  id: any;
  details: any;

  constructor(public activeroute: ActivatedRoute, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) {
    this.activeroute.params.subscribe(params => {
      this.id = params['id'];
      this.detail()
    })
   }

   ngOnInit(): void {
  }

  detail(){
    this.http.get(this.apiList.clientCamipaignDetail+this.id).subscribe((res:any)=>{
      console.log(res)
      if(res.statusCode == 200){
        this.details = res.data
      }
    },error=>{
      
    })
  }
}
