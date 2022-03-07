import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientCampaignCommonFunctionService {
  subject = new BehaviorSubject("0");


  constructor() {
  }

  camapignData(data) {
       this.subject.next(data)
  }

}
