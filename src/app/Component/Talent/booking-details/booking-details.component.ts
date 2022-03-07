import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingId: any;
  bookingDetail: any;
  bookingStartDate: any;
  bookingStartTime: string;
  bookingEndTime: string;
  bookingDayName: any;
  moment: any = moment;
  rate=3;
  upComingBookingId: any;

  constructor(private activeRoute:ActivatedRoute,public apiList: ApiListService, public http: HttpFunctionListService) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((res:any)=>{
      this.upComingBookingId = res['upcoming-booking-id'];
      console.log(this.upComingBookingId);
      })

      this.getBookingDetails();

  }

  getBookingDetails(){     
    this.http.get(this.apiList.getBookingDetails+'/'+ this.upComingBookingId).subscribe((res:any)=>{
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
