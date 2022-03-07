import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { Router } from '@angular/router';
declare var $: any;
declare var connectVerificationForm: any;


@Component({
  selector: 'app-connect-social',
  templateUrl: './connect-social.component.html',
  styleUrls: ['./connect-social.component.css']
})
export class ConnectSocialComponent implements OnInit {
  SocialData:FormGroup
  youtubeActive = false;
  instagramActive = false;
  tiktokActive = false
 facebookActive = true

  constructor(public router:Router, public messgae: MessageHandlingService, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.SocialData = this.formBuilder.group({
      facebookUsername: [''],
      youtubeUsername: [''],
      instaUsername: ['', [Validators.required]],
      tiktokUsername: [''],
    })
    new  connectVerificationForm
  }

  submit(){
    let data = {
      facebookUsername:this.SocialData.value.facebookUsername,
      youtubeUsername: this.SocialData.value.youtubeUsername,
      instaUsername: this.SocialData.value.instaUsername,
      tiktokUsername: this.SocialData.value.tiktokUsername,
    }
    this.http.post(this.apiList.influncerSaveSocialAccount, data).subscribe((res:any)=>{
      if (res.statusCode == 200) {
        this.messgae.success(res.message);
        this.router.navigate(['/campaign'])
      }
    },error=>{

    })
  }

  next(value){
  
   //this.youtubeActive = true
    if(value =='youtube'){
      this.youtubeActive = true
      this.instagramActive = false
      this.tiktokActive = false
      this.facebookActive = false
    }else if(value =='instagram'){
      this.instagramActive = true
      this.youtubeActive = false;
      this.tiktokActive = false;
      this.facebookActive = false
    }else if(value =='tiktok'){
      this.youtubeActive = false;
      this.instagramActive = false
      this.tiktokActive = true;
      this.facebookActive = false
    }else{
      this.youtubeActive = false;
      this.instagramActive = false
      this.tiktokActive = false;
      this.facebookActive = false
    }
  }

  back(value:any){
    if(value =='youtube'){
      this.youtubeActive = true
      this.instagramActive = false
      this.tiktokActive = false
      this.facebookActive = false
    }else if(value =='instagram'){
      this.instagramActive = true
      this.youtubeActive = false;
      this.tiktokActive = false;
      this.facebookActive = false
    }else if(value =='tiktok'){
      this.youtubeActive = false;
      this.instagramActive = false
      this.tiktokActive = true;
      this.facebookActive = false
    }else if(value =='facebook'){
      this.youtubeActive = false;
      this.instagramActive = false
      this.tiktokActive = false;
      this.facebookActive = true
    }
    else{
      this.youtubeActive = false;
      this.instagramActive = false
      this.tiktokActive = false;
      this.facebookActive = false
    }

  }

}
