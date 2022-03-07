import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
declare var cstmScroll: any;

@Component({
  selector: 'app-add-social-client',
  templateUrl: './add-social-client.component.html',
  styleUrls: ['./add-social-client.component.css']
})
export class AddSocialClientComponent implements OnInit {
  SocialLinkForm: FormGroup;

  constructor(public common:CommonFunctionService, 
    public messgae: MessageHandlingService, public router:Router, public apiList: ApiListService, public http: HttpFunctionListService, public formBuilder: FormBuilder) { } 

  ngOnInit(): void {
    new cstmScroll;
    this.SocialLinkForm = this.formBuilder.group({
      facebook: [''],
      youtube: [''],
      instagram: ['', [Validators.required]],
      tiktok: ['']
    })
  }

  socialSubmit(){
    let data ={
      facebook:this.SocialLinkForm.value.facebook,
      youtube: this.SocialLinkForm.value.youtube,
      instagram: this.SocialLinkForm.value.instagram,
      tiktok:this.SocialLinkForm.value.tiktok
    }
    this.http.post(this.apiList.clientSocialLink, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.router.navigate(['/client-choose-plan'])
      }
    }, error => {

    })
  }
}
