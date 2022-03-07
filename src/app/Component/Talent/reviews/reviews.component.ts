import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  completedbookingId: any;
  moment: any = moment;
  rate=3;

  reviewTalentStartDate: string;
   reviewDetail: any;
   profileImage: any;
   averageRating: any;
   Avgratings: any
   starCount: any;
  ratingForm: FormGroup;
  clientReviews: any;
  constructor(public apiList: ApiListService, public http: HttpFunctionListService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.ratingForm = this.formBuilder.group({
      comments: ['', Validators.required],
      ratingCount:['',Validators.required]
    
    });

      this.getReviewsTalentDetail()
      this.getData()
  }

  getReviewsTalentDetail(){
    this.http.get(this.apiList.getReviewListInTalent).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
       this.reviewDetail = res.data.reviews
       this.clientReviews = res.data.reviews?.clientReviews
       console.log(" this.reviewDetail",  this.reviewDetail);
       
  }

  console.log("this.clientReviews", this.clientReviews);
  console.log(this.clientReviews.length);
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
    },error=>{

    })
  }

  getData() {
    this.http.get(this.apiList.talnetMyProfile).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.profileImage = res.data.user.profileImage;
      }
    }, error => {

    })
  }

  ratingSubmit(){
   console.log(this.ratingForm.value)
   
  //  var data = {
  //   "text": this.ratingForm.value.comments,
  //   "starCount": this.ratingForm.value.ratingCount,
  //   "receiver": "receiver id",
  //   "booking": "booking id in case of talent",
  // }

  //  this.http.get(this.apiList.createReviewTalentAndInfluencer).subscribe((res: any) => {
  //   console.log(res)
  //   if (res.statusCode == 200) {
  //     this.profileImage = res.data.user.profileImage;
  //   }
  // }, error => {

  // })

  }

}
