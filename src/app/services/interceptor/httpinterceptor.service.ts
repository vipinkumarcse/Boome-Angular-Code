import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    const authReq = req.clone({
      headers: new HttpHeaders({
        //'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
      })
    });
    return next.handle(authReq);
  }
}
// export class HttpinterceptorService implements HttpInterceptor {
//   token: string;

//   constructor() { }
//   // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   //   var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
//   //   const authReq = req.clone({
//   //     headers: new HttpHeaders({
//   //       //'Content-Type':'application/json',
//   //       'Authorization': 'Bearer ' + token
//   //     })
//   //   });
//   //   return next.handle(authReq);
//   // } 

//  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // return next.handle(request).do((event: HttpEvent<any>) => {
//       if (request.url !== 'https://api.stripe.com/v1/tokens') {
//         var token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
//         const authReq = request.clone({
//           headers: new HttpHeaders({
//             //'Content-Type':'application/json',
//             'Authorization': 'Bearer ' + token
//           })
//         });
//         return next.handle(authReq);
//       }
//       else{
//         const Req = request.clone({
//           headers: new HttpHeaders({
//            'Content-Type': 'application/x-www-form-urlencoded',
//             //'Content-Type':'application/json',
//             'Authorization': 'Bearer ' + 'sk_test_2RbpFNKPWSAk0a1xP9w081pT'
//           })
//         });
//         return next.handle(Req);

//       }
//      (err: any) => {
//     };
//   }




// }
