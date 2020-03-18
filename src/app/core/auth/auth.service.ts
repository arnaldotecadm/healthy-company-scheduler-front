import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';

const apiURL = environment.API_AUTH;
const softwarePublicKey = environment.SOFTWARE_PUBLIC_KEY;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenService : TokenService) { }

    authenticate(username : string, password : string) {
        return this.http.post(apiURL + '/authenticate', { username, password, publicKey:softwarePublicKey }, { observe: 'response' } )
        .pipe(tap((res: any) => {
          const authToken = res.body.token;
          this.tokenService.setToken(authToken);

          console.log(authToken);
      }))
    }
}