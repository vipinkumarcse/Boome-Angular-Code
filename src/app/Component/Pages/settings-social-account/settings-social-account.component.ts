import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { DatePipe } from '@angular/common';

declare var $

@Component({
  selector: 'app-settings-social-account',
  templateUrl: './settings-social-account.component.html',
  styleUrls: ['./settings-social-account.component.css']
})
export class SettingsSocialAccountComponent implements OnInit {


  topBar = { name: 'Settings', icon: 'assets/images/home_icn.svg', 
  // date: new Date()
  date : this.datePipe.transform( new Date(),'dd/MM/yyyy')
}
  // topBar={name:'Settings',icon:'assets/images/blue_settings.svg',date:new Date().getDate()+'/'+ new Date().getMonth() +'/'+ new Date().getFullYear()}
  SocialData: FormGroup;
  socialConnectfb: FormGroup;
  socialConnecttiktok: FormGroup;
  socialConnectyoutube: FormGroup;

  connectSocialType:any;
  socialStatus:any;
  connectedAccount: string = 'connected'
  connectedAccountfb: string;
  connectedAccounttiktok: string;
  connectedAccountyoutube: string;

  socialdata: any;
  socialAccount:any;

  constructor(public messgae: MessageHandlingService, private datePipe:DatePipe, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.SocialData = this.formBuilder.group({
      facebookUsername: [''],
      youtubeUsername: [''],
      instaUsername: [''],
      tiktokUsername: [''],
    })

    this.socialConnectfb = this.formBuilder.group({
      email: ['',Validators.required],
    }),
    this.socialConnecttiktok = this.formBuilder.group({
      email: ['',Validators.required],
    }),
    this.socialConnectyoutube = this.formBuilder.group({
      email: ['',Validators.required],
    }),

this.getData();
    
  }

  getData() {
    this.http.get(this.apiList.influncerGetSocialAccount).subscribe((res: any) => {
      console.log(res)
     
      if (res.statusCode == 200) {
        this.socialAccount = res.data.socialAccount
        this.socialdata = res.data.socialAccount
        if(this.socialdata.facebook.isConnected == true){
          this.connectedAccountfb = 'connected'
        }
        else{
          this.connectedAccountfb = 'disconnected'
        }
        if(this.socialdata.tiktok.isConnected == true){
          this.connectedAccounttiktok = 'connected'
        }
        else{
          this.connectedAccounttiktok = 'disconnected'
        }
        if(this.socialdata.youtube.isConnected == true){
          this.connectedAccountyoutube = 'connected'
        }
        else{
          this.connectedAccountyoutube = 'disconnected'
        }
        // this.SocialData.patchValue({
        //   facebookUsername: res.data.socialAccount.facebookUsername,
        //   youtubeUsername: res.data.socialAccount.youtubeUsername,
        //   instaUsername: res.data.socialAccount.instaUsername,
        //   tiktokUsername: res.data.socialAccount.tiktokUsername,
        // })
      }
    }, error => {

    })
  }

  getSocialConnectData(connectSocialType) {
    this.http.get(this.apiList.influncerGetSocialAccount).subscribe((res: any) => {
      console.log(res)
      if (res.statusCode == 200) {
        // if(connectSocialType == 'Facebook'){
        //   // this.socialConnect.patchValue({
        //   //   email:res.data.socialAccount.facebook.username
        //   // })
        // }
    
        // else if(connectSocialType == 'Youtube'){
        //   // this.socialConnect.patchValue({
        //   //   // email:res.data.socialAccount.youtube.username
        //   // })

        // }
    
        // else if(connectSocialType == 'Tiktok'){
        //   // this.socialConnect.patchValue({
        //   //   // email:res.data.socialAccount.tiktok.username
        //   // })

        // }
       
        // this.SocialData.patchValue({
        //   facebookUsername: res.data.socialAccount.facebook.username,
        //   youtubeUsername: res.data.socialAccount.youtube.username,
        //   instaUsername: res.data.socialAccount.instagram.username,
        //   tiktokUsername: res.data.socialAccount.tiktok.username,
        // })
       
     }
    }, error => {

    })
  }

  openConnectingModalfb(type){
     this.connectSocialType = type
     $('#connect_facebook').modal('show');
    //  this.getSocialConnectData(this.connectSocialType)
}

openConnectingModalYB(type){
  this.connectSocialType = type
  $('#connect_youtube').modal('show');
 //  this.getSocialConnectData(this.connectSocialType)
}

openConnectingModalTiktok(type){
  this.connectSocialType = type
  $('#connect_tiktok').modal('show');
 //  this.getSocialConnectData(this.connectSocialType)
}

  submit(){
    console.log(this.connectSocialType)
    if(this.connectSocialType == 'Facebook'){
      this.SocialData.value.facebookUsername = this.socialConnectfb.value.email 
    }

    else if(this.connectSocialType == 'Youtube'){
      this.SocialData.value.youtubeUsername = this.socialConnectyoutube.value.email
    }

    else if(this.connectSocialType == 'Tiktok'){
      this.SocialData.value.tiktokUsername = this.socialConnecttiktok.value.email
    }

    let data = {
      facebookUsername: this.SocialData.value.facebookUsername ? this.SocialData.value.facebookUsername:'',
      youtubeUsername:  this.SocialData.value.youtubeUsername ? this.SocialData.value.youtubeUsername:'',
      instaUsername:  this.SocialData.value.instaUsername ? this.SocialData.value.instaUsername:'',
      tiktokUsername:  this.SocialData.value.tiktokUsername ? this.SocialData.value.tiktokUsername:'',

    }

    console.log(data)

    this.http.post(this.apiList.influncerSaveSocialAccount, data).subscribe((res: any) => {
       console.log(res)
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.socialConnectfb.value.email = ''
        this.socialConnectyoutube.value.email = ''
        this.socialConnecttiktok.value.email = ''
        // this.socialStatus = 'Connected';
        // this.connectedAccount = 'connected'
        this.getData();
        // this.getSocialConnectData(this.connectSocialType)

      }
    }, error => {

    })
  }


  disconnectSocialConnectFB(){
    this.http.get(this.apiList.influncerDisconnectSocialAccountfFacebook).subscribe
     ((res:any)=>{
       console.log(res)
       if (res.statusCode == 200) {
         this.messgae.success(res.message)
         // this.socialStatus = 'Disconnected'
         this.connectedAccountfb = 'disconnected'
         this.getData();
       }
     })
 }


 disconnectSocialConnectTiktok(){
     this.http.get(this.apiList.influncerDisconnectSocialAccountTiktok).subscribe
     ((res:any)=>{
       console.log(res)
       if (res.statusCode == 200) {
         this.messgae.success(res.message)
         // this.socialStatus = 'Disconnected'
         this.connectedAccounttiktok = 'disconnected'
         this.getData();
       }
     })
 }


 disconnectSocialConnectYB(){
     this.http.get(this.apiList.influncerDisconnectSocialAccountYoutube).subscribe
     ((res:any)=>{
       console.log(res)
       if (res.statusCode == 200) {
         this.messgae.success(res.message)
         // this.socialStatus = 'Disconnected'
         this.connectedAccountyoutube = 'disconnected'
         this.getData();
       }
     })  
 }




  // submit() {
  //   let data = {
  //     facebookUsername: this.SocialData.value.facebookUsername,
  //     youtubeUsername:  this.SocialData.value.youtubeUsername,
  //     instaUsername:  this.SocialData.value.instaUsername,
  //     tiktokUsername:  this.SocialData.value.tiktokUsername,

  //   }
  //   this.http.post(this.apiList.influncerEditBankDetails, data).subscribe((res: any) => {
  //     if (res.statusCode == 200) {
  //       this.messgae.success(res.message)
  //       this.getData()
  //     }
  //   }, error => {

  //   })
  // }

}
