import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-client-job-request',
  templateUrl: './client-job-request.component.html',
  styleUrls: ['./client-job-request.component.css']
})
export class ClientJobRequestComponent implements OnInit {
  id: any;
  requestList: any;

  constructor(public activeroute: ActivatedRoute, public messgae: MessageHandlingService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      this.id = params['id'];
      this.list()
    })
  }

  list() {
    this.http.get(this.apiList.clientRequestList + this.id).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.requestList = res.data.requests
      }
    }, error => {

    })
  }

  requestStatus(value: any, id: any) {     // acceptRejectRequest
    let data = {
      status: value
    }
    this.http.post(this.apiList.clientBusinessStatus + id, data).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.list()
      }
    }, error => {

    })
  }

}
