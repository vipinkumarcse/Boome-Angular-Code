import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  data: any = {};
  review: any = {};
  myReviews: any = [];
  clientReviews: any = [];
  currentRate = 3.14;
  max = 5
  ratings: number
  profileData: any;
  addressData: any;
  Avgratings: any
  ratingArr: any = [];

  // topBar={name:'Reviews & Ratings', icon:'assets/images/blue_star.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}
  topBar = {
    name: 'Reviews & Ratings', icon: 'assets/images/blue_star.svg',
    // date:new Date()
    date: this.datePipe.transform(new Date(), 'dd/MM/yyyy')
  }

  constructor(public formBuilder: FormBuilder,
    private datePipe: DatePipe, public router: Router, public common: Common_FunctionService, public apiList: ApiListService,
    public http: HttpFunctionListService) { }
  ngOnInit(): void {
    this.common.subject.subscribe((res: any) => {
      this.profileData = res
      console.log(this.profileData)
    })
    this.common.address.subscribe((res: any) => {
      this.addressData = res
      console.log(this.addressData)
    })
    this.reviews()
  }


  reviews() {
    this.http.get(this.apiList.influncerReviews).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.data = res;
        this.review = res.data.reviews;
        this.myReviews = this.review.myReviews;
        this.clientReviews = this.review.clientReviews
      }
      console.log("this.review", this.review);
      console.log(" this.myReviews", this.myReviews);
      console.log("this.clientReviews", this.clientReviews);
     // debugger
      // for(var i= 0; i< this.clientReviews.starCount; i++){
      //   this.rating =  this.rating + i  + 'a';
      //   console.log(this.rating);
      // }
      // console.log(this.rating);
      console.log(this.clientReviews.length);
      // for (let index = 0; index < this.clientReviews.length; index++) {
      //   this.rating += this.clientReviews[index]
      //   console.log(this.rating);
      // }
      if (this.clientReviews.length == 0) {
        this.Avgratings = this.clientReviews.length
      }
      else {
        var a = 0;
        for (let i = 0; i < this.clientReviews.length; i++) {
          a += this.clientReviews[i].starCount;
        }
        console.log(a / this.clientReviews.length);
        this.Avgratings = a / this.clientReviews.length;
        console.log(this.Avgratings);
        for (let i = 0; i < this.clientReviews.length; i++) {
          a += this.clientReviews[i].starCount;
        }
      }
      // alert(a);
    },
      error => {

      }
    )

  }
}
