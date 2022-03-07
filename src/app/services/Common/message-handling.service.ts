import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlingService {
  showError() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private toastr: ToastrService) { }

  error(error:any){
    this.toastr.error('Oops', error, {
      timeOut: 2000,
    });
  }

  success(message:any){
    this.toastr.success('Success', message, {
      timeOut: 2000,
    });
  }

  warning(message){
    this.toastr.warning('Warning', message.error.message, {
      timeOut: 2000,
    });
  }
}
