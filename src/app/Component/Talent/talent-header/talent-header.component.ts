import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-talent-header',
  templateUrl: './talent-header.component.html',
  styleUrls: ['./talent-header.component.css']
})
export class TalentHeaderComponent implements OnInit {
  topBar = { name: 'Your Task', icon: '../../../../assets/images/home_icn.svg' }
  detail: any;
  notificationsDetail: any=[];
  // date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()

  constructor(public apiList: ApiListService, public router: Router, public http: HttpFunctionListService, public common: CommonFunctionService) {

  }

  ngOnInit(): void {
    this.getData();
    this.common.getObservable().subscribe((res: any) => {
      console.log(res)
      if (res == 'editData') {
        this.getData()
      }
    })

    this.getNotificationTalent()
  }

  getData() {
    this.http.get(this.apiList.talentMyInfo).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log(res.data)
        this.detail = res.data;
        console.log("this.detail",this.detail)
      }
    }, error => {

    })
  }

  getNotificationTalent(){
    this.http.get(this.apiList.notificationListing).subscribe((res:any) => {
      console.log(res)
      if(res.statusCode == 200){
        this.notificationsDetail = res.data.notifications
        console.log(this.notificationsDetail)       
      }
    },
    error => {

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

 logout(){
  localStorage.clear()
  this.router.navigate(['/']) 
 }




}
