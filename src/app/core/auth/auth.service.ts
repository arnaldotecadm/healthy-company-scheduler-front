import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';

const apiURL = environment.ApiUrl;

const context = '/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(username: string, password: string) {
    return this.http
      .post(
        apiURL + context + 'authenticate',
        { username, password },
        { observe: 'response' }
      )
      .pipe(
        tap((res: any) => {
          const authToken = res.body.token;
          this.tokenService.setToken(authToken);
        })
      );
  }
}
