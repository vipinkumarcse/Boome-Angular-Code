import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';

@Component({
  selector: 'app-client-talent-reviews',
  templateUrl: './client-talent-reviews.component.html',
  styleUrls: ['./client-talent-reviews.component.css']
})
export class ClientTalentReviewsComponent implements OnInit {

  data: any = {};
  review: any = {};
  myReviews: any = [];
  talentReviews: any = [];

  constructor( public apiList : ApiListService , public http : HttpFunctionListService) { }

  ngOnInit(): void {
    this.getReviews()
    
  }

  getReviews(){
    this.http.get(this.apiList.talentReviews).subscribe((res :any) => {
      this.data = res;
      this.review = res.data.reviews;
      this.myReviews = this.review.myReviews;
      this.talentReviews = this.review.talentReviews
      console.log("result", res);
      
    })

  }

}
