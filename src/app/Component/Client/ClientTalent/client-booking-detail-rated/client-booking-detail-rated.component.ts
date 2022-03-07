import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';


@Component({
  selector: 'app-client-booking-detail-rated',
  templateUrl: './client-booking-detail-rated.component.html',
  styleUrls: ['./client-booking-detail-rated.component.css']
})
export class ClientBookingDetailRatedComponent implements OnInit {

  id: any;
  details: any;
 
  showAge: any;
  age: any;
  bookingDate: any;
  starCount = 0;
  receiverId:any ;
 
  constructor( private route:ActivatedRoute, public router:Router ,
  public apiList: ApiListService, public http: HttpFunctionListService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id, "this.id");
    });
  }
  ngOnInit(): void {
    this.detail()
  }

  detail(){
    // debugger
    this.http.get(this.apiList.clientBookingDetails + this.id).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
        this.details= res.data.booking
      //  this.profileData = res.data.booking.bookedFor
      //  this.receiverId = res.data.booking.bookedFor?._id
      //   console.log("this.details",this.details);
      //   this.bookingDate = moment( this.details?.timeline?.startDate).format('MMM d, yyyy');
      //   //calculate  age
      //   this.age = moment( this.profileData.dateOfBirth).format('yyyy-MM-d');
      //   const convertAge = new Date(this.age
      //   );
      // const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      // this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      // console.log(this.showAge);
      }
    },error=>{

    })
  }



}
