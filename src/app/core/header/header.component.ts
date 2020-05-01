import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
    this.user$.subscribe((user) => (this.user = user));
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['sigin-in']);
  }

  isUserLogged(): boolean {
    return this.userService.isLogged();
  }
}
