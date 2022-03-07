import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  detail: any;
  bookingDetail: any=[];
  startingDate: any;
  startTime: string;
  endTime: string;
  search:any;
  startingDateUpcoming: string;
  startTimeUpcoming: string;
  endTimeUpcoming: string;
  startingDateOngoing: string;
  startTimeOngoing: string;
  endTimeOngoing: string;
  startingDateCompleted: string;
  startTimeCompleted: string;
  endTimeCompleted: string;
  constructor(public apiList: ApiListService, public http: HttpFunctionListService, public router:Router) { }

  ngOnInit(): void {
    this.getAllJobs()
  }


  getAllJobs(){  
    var currentDate:any = new Date()
    console.log(currentDate)
  
    this.http.get(this.apiList.getTalentListAccordingToStatus+'?currentTime='+currentDate).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
       this.bookingDetail=res.data.bookings
       
       console.log(this.bookingDetail)
       for (var i =0;i<this.bookingDetail.upcomingBooking.length;i++){
         this.startingDateUpcoming = moment(this.bookingDetail.upcomingBooking[i].timeline.startDate).format('MMM DD , YYYY');
         this.startTimeUpcoming = moment(this.bookingDetail.upcomingBooking[i].timeline.startTime).format('h:mm A');
         this.endTimeUpcoming = moment(this.bookingDetail.upcomingBooking[i].timeline.endTime).format('h:mm A');
        }

        for (var i =0;i<this.bookingDetail.ongoingBooking.length;i++){
          this.startingDateOngoing = moment(this.bookingDetail.ongoingBooking[i].timeline.startDate).format('MMM DD , YYYY');
          this.startTimeOngoing = moment(this.bookingDetail.ongoingBooking[i].timeline.startTime).format('h:mm A');
          this.endTimeOngoing = moment(this.bookingDetail.ongoingBooking[i].endTime).format('h:mm A');
         }

         for (var i =0;i<this.bookingDetail.completedBooking.length;i++){
          this.startingDateCompleted = moment(this.bookingDetail.completedBooking[i].timeline.startDate).format('MMM DD , YYYY');
          this.startTimeCompleted = moment(this.bookingDetail.completedBooking[i].timeline.startTime).format('h:mm A');
          this.endTimeCompleted = moment(this.bookingDetail.completedBooking[i].timeline.endTime).format('h:mm A');
         }
      }
    },error=>{

    })
  }

  upcomingBookingDetails(upComingbookingId){
    console.log(upComingbookingId)
    this.router.navigate(['/booking-details', {'upcoming-booking-id':upComingbookingId}])
  }

  onGoingBookingDetails(onGoingbookingId){
    console.log(onGoingbookingId)
    this.router.navigate(['/booking-detail-ongoing', {'ongoing-booking-id':onGoingbookingId}])
  }

  completedBookingDetails(completedBookingId){
    this.router.navigate(['/booking-details-completed', {'completed-booking-id':completedBookingId}])
  }
}
