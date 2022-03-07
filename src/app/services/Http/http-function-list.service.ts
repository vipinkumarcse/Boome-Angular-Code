import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpFunctionListService {

  constructor(public http: HttpClient) { }

  post(api, data) {
    return this.http.post(api, data)
  }

  get(api) {
    return this.http.get(api)
  }

  put(api, data, header){
    return this.http.put(api, data, header)
  }
  
  delete(url, value) {
    return this.http.delete(url, value);
  }
}
