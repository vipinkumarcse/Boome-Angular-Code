import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';

@Component({
  selector: 'app-client-talent-bookings',
  templateUrl: './client-talent-bookings.component.html',
  styleUrls: ['./client-talent-bookings.component.css']
})
export class ClientTalentBookingsComponent implements OnInit {

  talentList: any;
  clientprofileData: any;
  completedBooking:any = []
  ongoingBooking:any = []
  upcomingBooking:any = []
  max = 5
  currentRate = 3;


  constructor(public router: Router, public apiList: ApiListService, public http: HttpFunctionListService ,
    public ClientInfluncerFunction: CommonClientService) { }

  ngOnInit(): void {
    this.list()
  }

  list(){
    let CurrentDate = new Date()
    this.http.get(this.apiList.businessList+CurrentDate).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.talentList = res.data.bookings
        this.completedBooking = res.data.bookings?.completedBooking 
        console.log("this.completedBooking",this.completedBooking);
        this.ongoingBooking = res.data.bookings?.ongoingBooking
        console.log("this.ongoingBooking",this.ongoingBooking);
        this.upcomingBooking = res.data.bookings?.upcomingBooking
        console.log("this.upcomingBooking",this.upcomingBooking);
      }
    }, error => {

    })
  }

  completedBookingDetails(id){
    this.router.navigate(['/client-booking-completed', {id: id}])
  }

}
