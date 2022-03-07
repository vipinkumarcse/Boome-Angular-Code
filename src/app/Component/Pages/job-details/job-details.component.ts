import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Common_FunctionService } from '../CommonInfluncer/common-function.service';
import { DatePipe } from '@angular/common';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
declare var $: any;




@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  topBar={name:'Campaign Hall',jobD:'Job Detail' ,icon:'assets/images/home_icn.svg',
  // date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  type:string;
  id: any;
  detailCampaign: any;
  profileData: any;
  addressData: any;
  campaignDetail: any;
  facebookUrl: any;
  instaUrl: any;
  youtubeUrl: any;
  posts:any = []
  isApplied:any

  constructor(private route:ActivatedRoute, public router:Router, public messgae: MessageHandlingService, private datePipe:DatePipe,  public common:Common_FunctionService,public apiList: ApiListService, public http: HttpFunctionListService) {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      this.isApplied = params['isApplied'];
    })
   }

  ngOnInit(): void {
    this.common.subject.subscribe((res: any) => {
      this.profileData = res
      //console.log(this.profileData)
    })
    this.common.address.subscribe((res: any) => {
      this.addressData = res
    })
    this.detail()
  }

  detail(){
    this.http.get(this.apiList.campaignDetail+this.id).subscribe((res:any)=>{
      console.log(res)
      if (res.statusCode == 200) {
        this.detailCampaign = res.data.campaign
        this.campaignDetail =  this.detailCampaign.campaignDetail
        this.posts = this.detailCampaign.campaignDetail.posts
        console.log(this.detailCampaign);
        this.facebookUrl = this.detailCampaign.socialMediaUrls?.facebook
        this.instaUrl = this.detailCampaign.socialMediaUrls?.instagram
        this.youtubeUrl = this.detailCampaign.socialMediaUrls?.youtube

      }
    },error=>{

    })
  }

  applyCampaign() {
    let data = {
      campaignId: this.detailCampaign._id ,
      campaignCreator: this.detailCampaign.createdBy._id ,
    }
    this.http.post(this.apiList.compaignDetail, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        $('#job_apply_success').modal('show');
       
      }

    }, error => {

    })
  }

  goFacebook(){
    window.open(this.facebookUrl)

  }

  goInsta(){
    window.open(this.instaUrl)
  }

  goYoutube(){
    window.open(this.youtubeUrl)
  }

  goTiktok(){

  }

}
