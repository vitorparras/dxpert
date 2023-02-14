import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/index', title: 'Dashboard', icon: 'fa-solid fa-house', class: '' },
  {
    path: '/usuario',
    title: 'Meu Perfil',
    icon: 'fa-solid fa-user',
    class: '',
  },
  {
    path: '/usuarios',
    title: 'Usuarios',
    icon: 'fa-solid fa-users',
    class: '',
  },
  {
    path: '/notifications',
    title: 'Simulações',
    icon: 'fa-solid fa-file-lines',
    class: '',
  },

  {
    path: '/user-profile',
    title: 'Acompanhamentos',
    icon: 'fa-solid fa-list-check',
    class: '',
  },
  {
    path: '/table-list',
    title: 'Configurações',
    icon: 'fa-solid fa-gears',
    class: '',
  },
  {
    path: '/login',
    title: 'Sair',
    icon: 'fa-solid fa-arrow-right-from-bracket',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] | undefined;
  index = '/index';

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
