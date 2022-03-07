import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  profileData: any;
  data:any;
  difference:any;
  notifications:any = [];
  date = new Date() 
  yourDate:any;
  timing:any ;

  constructor(public apiList: ApiListService,
     public router: Router,  public http: HttpFunctionListService,public common:Common_FunctionService) { }

  ngOnInit(): void {
    this.common.subject.subscribe((res:any)=>{
      this.profileData = res
      })
      this.notification()
      // var aDay = 24*60*60*1000;
      // console.log(timeSince(new Date(Date.now()-aDay)));
      // console.log(timeSince(new Date(Date.now()-aDay*2)));
  }

  notification(){
    this.http.get(this.apiList.notificationListing).subscribe((res:any) => {
      if(res.statusCode == 200){
        this.data = res.data
      this.notifications = this.data.notifications
        // console.log("this.notifications",this.notifications[0].createdAt);

        for (let index = 0; index < this.notifications.createdAt; index++) {
          this.timing =  this.notifications[index].createdAt
          console.log(this.timing);
        }
        console.log(this.timing);


//        this.yourDate = new Date(this.notifications[0].createdAt);
// this.difference = moment(this.yourDate).fromNow();
// console.log("this.difference",this.difference);

        
      }
    },
    error => {

    })
  }


   timeSince(date) {

    var seconds = Math.floor((date - date) / 1000);
  
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
  };

  logout(){
    localStorage.clear()
    this.router.navigate(['/']) 
   }
    // [routerLink]="['/']"

}



