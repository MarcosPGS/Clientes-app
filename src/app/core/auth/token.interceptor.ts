import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  urlsToNotUse: Array<string>;
  constructor() {
    this.urlsToNotUse = [
      'aplicacao/.+',
      'aplicacao/clientes/.+',
      'aplicacao/servicos/.+'
    ];
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token) {
      // request = request.clone({
      //   setHeaders: {
      //     Authorization: 'Bearer ' + token
      //   }
      // });
    }
    return next.handle(request);
  }

  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // if there is Anonymous header, don't handle the request, and remove this flag
  //   if (req.headers.get('Anonymous') !== undefined) {
  //     const newHeaders = req.headers.delete('Anonymous');
  //     const newRequest = req.clone({ headers: newHeaders });
  //     return next.handle(newRequest);
  //   } else {
  //     const token = localStorage.getItem('token');
  //     console.log(token);
  //     const newRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  //     return next.handle(newRequest);
  //   }
  // }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   if (this.isValidRequestForInterceptor(request.url)) {
  //     const token = localStorage.getItem('token');
  //     const modifiedRequest = request.clone({
  //       setHeaders: {
  //         Authorization: 'Bearer ' + token
  //       }
  //     });

  //     return next.handle(modifiedRequest);
  //   }
  //   return next.handle(request);
  // }

  // private isValidRequestForInterceptor(requestUrl: string): boolean {
  //   const positionIndicator = 'v1/api/';
  //   const position = requestUrl.indexOf(positionIndicator);
  //   if (position > 0) {
  //     const destination: string = requestUrl.substr(position + positionIndicator.length);
  //     for (const address of this.urlsToNotUse) {
  //       if (new RegExp(address).test(destination)) {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // }


  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // if there is Anonymous header, don't handle the request, and remove this flag
  //   if (req.headers.get('skip')) {
  //     const newHeaders = req.headers.delete('skip');
  //     const newRequest = req.clone({ headers: newHeaders });
  //     return next.handle(newRequest);
  //   }
  //   if (!req.headers.get('skip')) {
  //     const token = localStorage.getItem('token');
  //     console.log(token);
  //     const newRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  //     return next.handle(newRequest);
  //   }
  // }
}
