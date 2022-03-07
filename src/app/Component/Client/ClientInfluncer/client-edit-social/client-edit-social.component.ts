import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiListService } from 'src/app/services/Api/api-list.service';
import { CommonFunctionService } from 'src/app/services/Common/common-function.service';
import { MessageHandlingService } from 'src/app/services/Common/message-handling.service';
import { HttpFunctionListService } from 'src/app/services/Http/http-function-list.service';
import { CommonClientService } from '../../CommonClientService/common-client.service';

@Component({
  selector: 'app-client-edit-social',
  templateUrl: './client-edit-social.component.html',
  styleUrls: ['./client-edit-social.component.css']
})
export class ClientEditSocialComponent implements OnInit {
  SocialLinkForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public ClientInfluncerFunction: CommonClientService, public messgae: MessageHandlingService, public common: CommonFunctionService, public router: Router, public apiList: ApiListService, public http: HttpFunctionListService) {
    this.SocialLinkForm = this.formBuilder.group({
      facebook: [''],
      youtube: [''],
      instagram: ['', [Validators.required]],
      tiktok: ['']
    })
  }

  ngOnInit(): void {
    this.getSocialDetails()
  }

  getSocialDetails() {
    this.http.get(this.apiList.clientSocialAccount).subscribe((res: any) => {
      if (res.statusCode == 200) {
        console.log(res)
        this.SocialLinkForm.patchValue({
          facebook: res.data.socialLinks.facebook,
          youtube: res.data.socialLinks.youtube,
          instagram: res.data.socialLinks.instagram,
          tiktok: res.data.socialLinks.tiktok

        })
      }
    }, error => {

    })
  }

  update() {
    let data = {
      facebook: this.SocialLinkForm.value.facebook,
      youtube: this.SocialLinkForm.value.youtube,
      instagram: this.SocialLinkForm.value.instagram,
      tiktok: this.SocialLinkForm.value.tiktok
    }
    this.http.post(this.apiList.clientEditSocialLinks, data).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.messgae.success(res.message)
        this.getSocialDetails()
      }
    }, error => {

    })
  }

}
