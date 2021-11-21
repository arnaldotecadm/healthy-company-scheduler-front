import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken();
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  public decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token) {
      const user = jwt_decode(token) as User;

      this.userSubject.next(user);
    } else {
      this.logout();
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  public isLogged() {
    return this.tokenService.hasToken();
  }
}
