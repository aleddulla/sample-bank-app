import { HttpHeaderResponse, HttpResponse, HttpUserEvent, HttpSentEvent, HttpProgressEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    let authReq = req;
    let token = this.token.getToken();
    if (token != null) {
      return next.handle(this.addTokenRequest(req, token))
      .pipe(
       );
    } else {
      return next.handle(authReq);
    }
  }

  private addTokenRequest(request: HttpRequest<any>, token: String): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        AccessControlAllowMethos: '*',
        AccessControlAllowOrigin: '*',
      },
    });
  }
}
