import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  
})
export class TaskDetailComponent implements OnInit {
  taskId: any;
  bookingDetail: any;
  bookingStartDate: any;
  bookingStartTime: string;
  bookingEndTime: string;
  bookingDayName: any;
  moment: any = moment;
  rate=3;

  constructor(private activeRoute:ActivatedRoute,public apiList: ApiListService, public http: HttpFunctionListService,) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res:any)=>{
    this.taskId = res['task-id'];
    console.log(this.taskId);
    })
   
   this.getTaskDetails();
    
  }

  getTaskDetails(){     
    this.http.get(this.apiList.getBookingDetails+'/'+ this.taskId).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
       this.bookingDetail = res.data
       this.bookingStartDate = moment(this.bookingDetail.booking.timeline.startDate).format('MMM DD , YYYY');
       let date = new Date(this.bookingStartDate);
       this.bookingDayName = date.toLocaleString('en-us', {weekday: 'long'});
       this.bookingStartTime = moment(this.bookingDetail.booking.timeline.startTime).format('h:mm A');
       this.bookingEndTime = moment(this.bookingDetail.booking.timeline.endTime).format('h:mm A');

       
      
      }
    },error=>{

    })
  }

  acceptAndRejectBookingRequest(bookingId,statusType){
    var data ={
      "status": statusType
    }

  this.http.post(this.apiList.acceptOrRejectBookingRequest+'/'+bookingId,data).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
        this.getTaskDetails();
      }
    },error=>{

    })
  }

  timeAgo(date){
    var currentDate:any = new Date()
    var date:any = new Date(date)
    var seconds = Math.floor((currentDate - date) / 1000);

    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
 }
  
  

}
