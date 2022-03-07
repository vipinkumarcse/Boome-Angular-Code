import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';

@Component({
  selector: 'app-booking-details-completed',
  templateUrl: './booking-details-completed.component.html',
  styleUrls: ['./booking-details-completed.component.css']
})
export class BookingDetailsCompletedComponent implements OnInit {
  completedbookingId: any;
  moment: any = moment;
  rate=3;
  completedBookingDetail: any;
  completedBookingStartDate: string;
  completedBookingDayName: string;
  completedBookingStartTime: string;
  completedBookingEndTime: string;
  paymentTime: string;
  paymentDate: string;
  constructor(private activeRoute:ActivatedRoute,public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((res:any)=>{
      this.completedbookingId = res['completed-booking-id'];
      console.log(this.completedbookingId);
      })

      this.getCompletedBookingDetails()
  }

  getCompletedBookingDetails(){     
    this.http.get(this.apiList.getBookingDetails+'/'+ this.completedbookingId).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
       this.completedBookingDetail = res.data
       this.completedBookingStartDate = moment(this.completedBookingDetail.booking.timeline.startDate).format('MMM DD , YYYY');
       let date = new Date(this.completedBookingStartDate);
       this.completedBookingDayName = date.toLocaleString('en-us', {weekday: 'long'});
       this.completedBookingStartTime = moment(this.completedBookingDetail.booking.timeline.startTime).format('h:mm A');
       this.completedBookingEndTime = moment(this.completedBookingDetail.booking.timeline.endTime).format('h:mm A');
       this.paymentDate = moment(this.completedBookingDetail.booking.createdAt).format('MMM DD , YYYY');
       this.paymentTime = moment(this.completedBookingDetail.booking.createAt).format('h:mm:ss A');

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
