import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, BehaviorSubject, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private router: Router) {}

  addAuthenticationToken(req: HttpRequest<any>) {
    let headersConfig = {
      Accept: "application/json, text/plain, */*",
    };
    // const currentUser = this.userService.currentUser;

    // if (currentUser) {
    //   headersConfig["X-Pixelpai-TK"] = currentUser.token;
    // }

    // req = req.clone({ setHeaders: headersConfig });

    return req;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("🚀 ~ file: http.token.interceptor.ts ~ line 29 ~ HttpTokenInterceptor ~ req", req);
    return next.handle(req);
  }
}
