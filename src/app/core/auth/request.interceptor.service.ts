import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpSentEvent,
  HttpUserEvent,
  HttpResponse,
  HttpProgressEvent,
  HttpHeaderResponse,
  HttpHeaders,
  HttpErrorResponse,
  HttpEvent,
} from "@angular/common/http";
import { TokenService } from "../token/token.service";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private usuarioService: UserService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.usuarioService.logout();
          this.router.navigate(["sigin-in"]);
        }
        throw new HttpErrorResponse(error);
      })
    );
  }
}
