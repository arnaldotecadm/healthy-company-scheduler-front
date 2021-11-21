import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/core/token/token.service';
import { User } from 'app/core/user/user';
import { UserService } from 'app/core/user/user.service';
import * as jwt_decode from 'jwt-decode';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  onlySuper: boolean;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/home',
    title: 'Agendamentos',
    icon: 'pe-7s-graph',
    class: '',
    onlySuper: false,
  },
  {
    path: '/user-list',
    title: 'Lista de usuários',
    icon: 'pe-7s-user',
    class: '',
    onlySuper: true,
  },

  {
    path: '/lista-locais',
    title: 'Locais',
    icon: 'pe-7s-note2',
    class: '',
    onlySuper: true,
  },

  {
    path: '/lista-areas',
    title: 'Areas',
    icon: 'pe-7s-note2',
    class: '',
    onlySuper: true,
  },
  {
    path: '/lista-sub-areas',
    title: 'Sub-Areas',
    icon: 'pe-7s-note2',
    class: '',
    onlySuper: true,
  },
  {
    path: '/regras-agendamento',
    title: 'Regras de Agendamento',
    icon: 'pe-7s-note2',
    class: '',
    onlySuper: true,
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
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

    if (!user.superUser) {
      this.menuItems = this.menuItems.filter((menuItem) => !menuItem.onlySuper);
    }
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['sigin-in']);
  }
}
