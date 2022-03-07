import { Component, Input, OnInit,  } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  detail: any;
  taskDetail: any=[];
  startingDate: any;
  startTime: string;
  endTime: string;
  search:any;

  constructor(public apiList: ApiListService, public http: HttpFunctionListService, public router:Router) { }

  ngOnInit(): void {
    this.getData()
    this.getTalentTask()

  }

  getData(){     
    this.http.get(this.apiList.talentMyInfo).subscribe((res:any)=>{
      if (res.statusCode == 200) {
        console.log(res.data)
        this.detail = res.data;
      }
    },error=>{

    })
  }

  getTalentTask(){     
    this.http.get(this.apiList.getTalentTask).subscribe((res:any)=>{
      if (res.statusCode == 200) {
       this.taskDetail=res.data.tasks
       console.log(this.taskDetail)
       for (var i =0;i<this.taskDetail.length;i++){
         this.startingDate = moment(this.taskDetail[i].timeline.startDate).format('MMM DD , YYYY');
         this.startTime = moment(this.taskDetail[i].timeline.startTime).format('h:mm A');
         this.endTime = moment(this.taskDetail[i].timeline.endTime).format('h:mm A');
        }
      }
    },error=>{

    })
  }

  getSearchTalent(){
   console.log(this.search)
   this.http.get(this.apiList.getSearchJobList+'?title='+this.search).subscribe((res:any)=>{
     console.log(res)
    if (res.statusCode == 200) {
      this.taskDetail = res.data.tasks
      console.log(this.taskDetail.length)
    }
  },error=>{})
}

acceptAndRejectBookingRequest(bookingId,statusType){
  var data ={
    "status": statusType
  }

this.http.post(this.apiList.acceptOrRejectBookingRequest+'/'+bookingId,data).subscribe((res:any)=>{
    console.log(res)
  })
}


  routeToTaskDetail(taskId){
   this.router.navigate(['/task-detail', {'task-id':taskId}])
  }




}
