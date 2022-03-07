import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import * as moment from 'moment';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import {  Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl,FormGroup,  Validators } from '@angular/forms';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';



@Component({
  selector: 'app-client-booking-detail-completed',
  templateUrl: './client-booking-detail-completed.component.html',
  styleUrls: ['./client-booking-detail-completed.component.css']
})
export class ClientBookingDetailCompletedComponent implements OnInit {

  id: any;
  details: any;
  profileData:any 
  showAge: any;
  age: any;
  bookingDate: any;
  starCount = 0;
  ratingData: FormGroup;
  receiverId:any ;
  @Input('rating') public rating: number = 3;
  @Input('starTotalCount') public starTotalCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Output() public ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  public ratingArr = [];


  constructor( private route:ActivatedRoute, public router:Router ,
    private snackBar: MatSnackBar , public formBuilder: FormBuilder ,  public messgae: MessageHandlingService,   public apiList: ApiListService, public http: HttpFunctionListService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id, "this.id");
      
    });

     this.ratingData = this.formBuilder.group({
     starCount: ['', [Validators.required]],
      text: [],
    })
  }

  ngOnInit(){

    console.log("a "+this.starTotalCount)
    for (let index = 0; index < this.starTotalCount; index++) {
      this.ratingArr.push(index);
    }
  
   this.detail()
  }

  detail(){
    // debugger
    this.http.get(this.apiList.clientBookingDetails + this.id).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
        this.details= res.data.booking
       this.profileData = res.data.booking.bookedFor
       this.receiverId = res.data.booking.bookedFor?._id
        console.log("this.details",this.details);
        this.bookingDate = moment( this.details?.timeline?.startDate).format('MMM d, yyyy');
        //calculate  age
        this.age = moment( this.profileData.dateOfBirth).format('yyyy-MM-d');
        const convertAge = new Date(this.age
        );
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.showAge);
      }
    },error=>{

    })
  }

  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starTotalCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  submit() {
 let data = {
      text: this.ratingData.value.text,
      starCount: this.ratingData.value.starCount,
      receiver: this.receiverId ,
      receiverRole: "talent",
      booking: this.id,
     }
     
     this.http.post(this.apiList.giveRating, data).subscribe((res: any) => {
       if (res.statusCode == 200) {
         console.log(res);
         this.messgae.success(res.message)
         this.ratingData.reset();
        //  this.router.navigate(['/client-booking-rated'])
         this.router.navigate(['//client-booking-rated', {id: this.id}])

         // this.getDetail()
       }
     }, error => {
 
     })
   }

}
