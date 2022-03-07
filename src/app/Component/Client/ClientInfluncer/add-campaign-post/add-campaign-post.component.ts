import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ClientCampaignCommonFunctionService } from '../ClientCampaigncommon-function.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

declare var $: any;


@Component({
  selector: 'app-add-campaign-post',
  templateUrl: './add-campaign-post.component.html',
  styleUrls: ['./add-campaign-post.component.css']
})
export class AddCampaignPostComponent implements OnInit {
  // editor: Editor;
  html: '';
  campaignData: any;
  CreateCampaign: FormGroup;
  postForm: FormGroup;
  storyForm: FormGroup
  postshashtagsarray = []
  postsmentionssarray = []
  storyhashtagsarray = []
  storymentionssarray = []
  stories = []
  posts = []
  pastImage: any;
  StoryImage: any;
  fileImage: any;
  imageUploadData: any;
  numberPost = []
  NumberOfPost: number;
  numberStory = [];
  NumberOfStory: number;
  lat: any;
  long: any;
  LatLong = [];
  tabValue: any = 'Post';
  private httpClient: HttpClient
  typeOfPost: any = 'image';
  trustedPastImage : SafeUrl;
  StorytrustedPastImage: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,private handler: HttpBackend, public service: ClientCampaignCommonFunctionService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) {
    this.httpClient = new HttpClient(handler);

  }

  ngOnInit(): void {

    this.service.subject.subscribe((res: any) => {
      this.campaignData = res
      console.log(this.campaignData)
      this.getLatLong();
    })
    this.CreateCampaign = this.formBuilder.group({

      campaignFor: ['facebook', [Validators.required]],  // "facebook or instagram or youtube or tiktok",
      type: ['', [Validators.required]], // "post or story or both",
    })

    this.postForm = this.formBuilder.group({
      number: ['1', [Validators.required]],
      poststype: ['', [Validators.required]], // "image,video",
      postsfile: ['', [Validators.required]],// "image or video link",
      postsdescription: ['', [Validators.required]], //"any string",
      postsguidelines: ['', [Validators.required]],//"any string",
      postshashtags: [''], //[],
      postsmentions: [''], //[]
    })

    this.storyForm = this.formBuilder.group({
      number_story: ['1', [Validators.required]],
      storytype: ['', [Validators.required]], // "image,video",
      storyfile: ['', [Validators.required]],// "image or video link",
      storydescription: ['', [Validators.required]], //"any string",
      storyguidelines: ['', [Validators.required]],//"any string",
      storyhashtags: [''], //[],
      storymentions: [''], //[]
    })
    this.NumberPost(1)
    this.NumberStory(1)

  }

  confirmModal() {
    $('#shareStory').modal('show');
  }
  AddStory() {
    $('#shareStory').modal('hide');
    this.tabValue = 'Story';
  }
  tabClick(e) {
    this.tabValue = e;
  }

  /*  =====hashtags and mentions==== */

  hastags() {    // add hastag arrays
    let data = '#' + this.postForm.value.postshashtags
    this.postshashtagsarray.push(data)
    this.postForm.patchValue({
      postshashtags: ''
    })
  }

  mentions() {    // add mentions arrays
    let data = '@' + this.postForm.value.postsmentions
    this.postsmentionssarray.push(data)
    this.postForm.patchValue({
      postsmentions: ''
    })
  }

  hastagstories() {    // add hastag arrays
    let data = '#' + this.storyForm.value.storyhashtags
    this.storyhashtagsarray.push(data)
    this.storyForm.patchValue({
      storyhashtags: ''
    })
  }

  mentionstories() {    // add mentions arrays
    let data = '@' + this.storyForm.value.storymentions
    this.storymentionssarray.push(data)
    this.storyForm.patchValue({
      storymentions: ''
    })
  }

  /*  ========= */


  /* ===== Upload image ========== */

  selectImage(event: any, type: any) {
    console.log(event);
    var that = this;
    if (event.target.files && event.target.files[0]) {
      let fileList = event.target.files;
      let file = fileList[0];
      that.fileImage = file;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.imageUploadData = event.target.files[0]
   

      this.typeOfPost = this.imageUploadData.type.split('/')[0]
      console.log(this.typeOfPost)
      this.imageUpload(type)
     
      // reader.onload = (event) => {
        if (type == 'Post') {
         // that.pastImage = (<FileReader>event.target).result;
      var image: any = document.getElementById(type);
      this.pastImage = URL.createObjectURL(event.target.files[0]);
     this.trustedPastImage= this.sanitizer.bypassSecurityTrustResourceUrl(this.pastImage)
      console.log(this.pastImage);
        }
        if (type == 'Story') {
         // that.StoryImage = (<FileReader>event.target).result;
         var image: any = document.getElementById(type);
         this.StoryImage = URL.createObjectURL(event.target.files[0]);
        this.StorytrustedPastImage= this.sanitizer.bypassSecurityTrustResourceUrl(this.pastImage)
         console.log(this.pastImage);
        }
      // }
      // reader.onload = function () {
      //   if (type == 'Post') {

      //     that.pastImage = (<FileReader>event.target).result;
      //    console.log(that.pastImage)
      //     // that.pastImage = reader.result;
      //   }

      //   if (type == 'Story') {
      //    // console.log(reader.result)
      //     that.StoryImage = reader.result;
      //   }

      // };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  imageUpload(type) {
    if (this.imageUploadData) {
      let data = {
        key: this.imageUploadData.name,
        contentType: this.imageUploadData.type
      }
      this.http.post(this.apiList.ImageUpload, data).subscribe((res: any) => {
        console.log(res)
      //   this.trustedPastImage= this.sanitizer.bypassSecurityTrustResourceUrl('https://boome-storage.s3.us-east-2.amazonaws.com/'+res.fileName)
      // console.log(this.pastImage);
        if (res.statusCode == 200) {
          // this.imageName = res.data.fileName;
          this.common.putMethodUploadImage(res.data.preSignedUrl, this.imageUploadData.type, this.fileImage);
           
          this.postForm.patchValue({
            postsfile: res.data.fileName,
            poststype: this.imageUploadData.type

          })
          this.storyForm.patchValue({
            storyfile: res.data.fileName,
            storytype: this.imageUploadData.type
          })
        } else {
        }
      }, error => {
        console.log(error)

      })
    }
  }

  /* =========================== */

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '1000',
    translate: 'yes',
    height: '1000',
    placeholder: 'Enter text here...',


    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  }

  NumberPost(value) {
    this.numberPost = []
    this.postshashtagsarray = [];
    this.postsmentionssarray = [];
    for (let i = 1; i <= value; i++) {
      this.numberPost.push({ id: i, activeClass: '' })
    }
    this.NumberOfPost = this.numberPost.length
    console.log(this.NumberOfPost)
  }

  add_post() {
    if (this.postshashtagsarray.length == 0) {
      return this.messgae.error('Add atleast one hashtag')
    }
    if (this.postsmentionssarray.length == 0) {
      return this.messgae.error('Add atleast one mention')
    }
    let postData = {
      type: this.postForm.value.postsfile,
      file: this.postForm.value.poststype,
      description: this.postForm.value.postsdescription,
      guidelines: this.postForm.value.postsguidelines,
      hashtags: this.postshashtagsarray,
      mentions: this.postsmentionssarray
    }
    this.posts.push(postData)
    this.posts.forEach((value, i) => {
      this.numberPost.forEach((elementAt, j) => {
        if (i == j) {
          elementAt.activeClass = 'active'
        }
      })
    })
    this.postshashtagsarray = []
    this.postsmentionssarray = []
    this.postForm.patchValue({
      postsdescription: '',
      postsguidelines: '',
      postsfile: '',
      poststype: '',
    })
    this.pastImage = ''
    if (this.numberPost.length == this.posts.length) {
      this.confirmModal()
    }
  }

  no() {
    this.createpost()
  }

  NumberStory(value) {
    this.numberStory = []
    this.storyhashtagsarray = [];
    this.storymentionssarray = [];
    for (let i = 1; i <= value; i++) {
      this.numberStory.push({ id: i, activeClass: '' })
    }
    this.NumberOfStory = this.numberStory.length
  }

  addStory() {
    if (this.storyhashtagsarray.length == 0) {
      return this.messgae.error('Add atleast one hashtag')
    }
    if (this.storymentionssarray.length == 0) {
      return this.messgae.error('Add atleast one mention')
    }
    let storyData = {
      type: this.storyForm.value.storyfile,
      file: this.storyForm.value.storytype,
      description: this.storyForm.value.storydescription,
      guidelines: this.storyForm.value.storyguidelines,
      hashtags: this.storyhashtagsarray,
      mentions: this.storymentionssarray
    }
    this.stories.push(storyData)

    this.stories.forEach((value, i) => {
      this.numberStory.forEach((elementAt, j) => {
        if (i == j) {
          elementAt.activeClass = 'active'
        }
      })
    })
    this.storyhashtagsarray = []
    this.storymentionssarray = []
    this.StoryImage = ''
    this.storyForm.patchValue({
      storydescription: '',
      storyguidelines: '',
      storyfile: '',
      storytype: '',
    })
  }

  createpost() {

    let type = (this.stories.length != 0 && this.posts.length != 0) ? 'both' : (this.stories.length != 0 && this.posts.length == 0) ? 'story' : (this.stories.length == 0 && this.posts.length != 0) ? 'post' : '';
    console.log(type)
    let data = {
      title: this.campaignData.title,
      description: this.campaignData.description,
      category: this.campaignData.category,
      completeAddress: this.campaignData.completeAddress,
      city: this.campaignData.city,
      country: this.campaignData.country,
      location: this.LatLong,
      paymentType: this.campaignData.select == 'Voucher' ? 'voucher' : 'cash',
      currencyType: this.campaignData.paymentType,
      amount: this.campaignData.amount,
      startDate: moment(this.campaignData.startDate).format('DD-MM-yyyy'),
      endDate: moment(this.campaignData.endDate).format('DD-MM-yyyy'),
      campaignImage: this.campaignData.campaignImage,
      campaignFor: this.CreateCampaign.value.campaignFor,
      type: type,
      voucherTitle: this.campaignData.voucherTitle,
      voucherDescription: this.campaignData.voucherDescription,
      posts: this.posts,
      stories: this.stories
      // }
    }
    this.http.post(this.apiList.createCampign, data).subscribe((res: any) => {
      console.log(res)
      if(res.statusCode == 200){
        this.router.navigate(['/clientInfluncer'])
      }
    }, error => {

    })

  }

  getLatLong() {
    console.log(this.campaignData.city + ',' + this.campaignData.country)
    this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.campaignData.city + ',' + this.campaignData.country + '&key=AIzaSyAuaf4H1OZbRVGB3klqnsGX1KCWzUDkVbc').subscribe((res: any) => {
      if (res.status == 'OK') {
        this.lat = res.results[0].geometry.location.lat
        this.long = res.results[0].geometry.location.lng
        console.log(this.lat, this.long)
        this.LatLong.push(this.long, this.lat)
      }
    })
  }


}


