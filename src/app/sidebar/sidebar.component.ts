import { Component, OnInit } from "@angular/core";
import { UserService } from "app/core/user/user.service";
import { Router } from "@angular/router";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
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
