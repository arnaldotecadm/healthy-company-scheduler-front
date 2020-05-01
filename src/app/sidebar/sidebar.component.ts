import { Component, OnInit } from "@angular/core";
import { UserService } from "app/core/user/user.service";
import { Router } from "@angular/router";
import { TokenService } from "app/core/token/token.service";
import { User } from "app/core/user/user";
import * as jwt_decode from "jwt-decode";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export var ROUTES: RouteInfo[] = [
  { path: "/home", title: "Home Page", icon: "pe-7s-graph", class: "" },
  {
    path: "/user-list",
    title: "Lista de usuários",
    icon: "pe-7s-user",
    class: "",
  },
  {
    path: "/app-list",
    title: "Lista de Aplicativos",
    icon: "pe-7s-note2",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  private superUser = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);

    const user = jwt_decode(this.tokenService.getToken()) as User;
    let superUser = false;

    if (user.authority_list && user.authority_list.length > 0) {
      user.authority_list.forEach((auth) => {
        if (auth.authority == "ADMIN") {
          superUser = true;
        }
      });
    }

    if (!superUser) {
      this.menuItems = this.menuItems.filter(
        (menuItem) => !menuItem.path.endsWith("user-list")
      );
    }

    console.log(JSON.stringify(user));
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(["sigin-in"]);
  }
}
