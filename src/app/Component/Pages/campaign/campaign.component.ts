import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';



@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  // topBar = { name: 'Campaign Hall', icon: 'assets/images/home_icn.svg', date: new Date() }
  topBar = { name: 'Campaign Hall', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')

}
// topBar = { name: 'Campaign Hall', icon: 'assets/images/home_icn.svg', date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear() }
  profileData: any;
  addressData: any;
  campaignList: any;
  // Search: FormGroup;
  data: any;
  posts: any;
  user: any;
  followerPercent: any;
  followingPercent: any;
  taskDetail: any;
  title:any



  constructor( public messgae: MessageHandlingService, public router: Router, public common: Common_FunctionService, public apiList: ApiListService, public http: HttpFunctionListService,
    private datePipe:DatePipe) { }
  ngOnInit(): void {
    // this.Search = this.formBuilder.group({
    //   search: [''],
    // })
    this.common.subject.subscribe((res: any) => {
      this.profileData = res
      //console.log(this.profileData)
    })
    this.common.address.subscribe((res: any) => {
      this.addressData = res
    })

    this.Campaign()
    this. influencerInfo()
  }

  Campaign() {
    console.log(this.apiList.influncerCampaignHall)
    this.http.get(this.apiList.influncerCampaignHall).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        this.campaignList = res.data.campaigns
      }
    }, error => {

    })

  }

  redirect(id: any , isApplied:any) {
    this.router.navigate(['/job-detail', {
      id: id,
      type: 'detail' ,
      isApplied: isApplied 
    }])
    this.Campaign() ;
  }

  influencerInfo(){
    this.http.get(this.apiList.influncerInfo).subscribe((res:any) => {
      if(res.statusCode == 200){
      this.data = res.data;
     this.posts =  this.data.posts;
     this.user =  this.data.user
     this.followerPercent = this.data.user.socialAccount.instagram.data?.followerPercentIncrease
     this.followingPercent = this.data.user.socialAccount.instagram.data?.followingPercentIncrease
  
      }
      console.log("this.user?.socialAccount?.instagram?.data?.postsCount",this.user?.socialAccount?.instagram?.data?.postsCount);
      
    },
    error => {

    }
    )

  }


  savePost(id:any){
    this.http.get(this.apiList.saveCompaignPost + id).subscribe((res:any) => {
      if(res.statusCode == 200){
      this.data = res.data;
      this.messgae.success(res.message)
      this.Campaign()
      }
      
    },
    error => {

    }
    )

  }

  getSearchTalent(){
    console.log(this.title)
    this.http.get(this.apiList.campaignSearch+'?title='+this.title).subscribe((res:any)=>{
      console.log(res)
     if (res.statusCode == 200) {
       this.campaignList = res.data.campaigns
     }
   },error=>{})
 }





}
