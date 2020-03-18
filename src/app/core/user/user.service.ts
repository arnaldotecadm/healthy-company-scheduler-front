import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    
    constructor(private tokenService: TokenService) { 
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    public isLogged() {
        return this.tokenService.hasToken();
    }
}