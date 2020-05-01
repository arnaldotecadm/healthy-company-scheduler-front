import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate({
    route,
    state,
  }: {
    route: ActivatedRouteSnapshot;
    state: RouterStateSnapshot;
  }): boolean | Observable<boolean> | Promise<boolean> {
    if (this.userService.isLogged()) {
      return true;
    } else {
      this.router.navigate(["sigin-in"]);
    }
    return false;
  }
}
