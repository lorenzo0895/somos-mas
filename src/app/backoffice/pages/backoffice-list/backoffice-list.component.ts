import { Component } from '@angular/core';

@Component({
  selector: 'app-backoffice-list',
  templateUrl: './backoffice-list.component.html',
  styleUrls: ['./backoffice-list.component.scss']
})
export class BackofficeListComponent{
  dashboard!:Array<any>;

  constructor() {
    this.dashboard = [
      {
        id: 1,
        title: "Novedades",
        path: '/backoffice/novedades',
        icon: `pi pi-calendar-plus`
      },
      {
        id: 2,
        title: "Actividades",
        path: '/backoffice/actividades',
        icon: `pi pi-calendar`
      },
      {
        id: 3,
        title: "Categorías",
        path: '/backoffice/categorias',
        icon: `pi pi-list`
      },      
      {
        id: 4,
        title: "Organización",
        path: '/backoffice/organization',
        icon: `pi pi-briefcase`
      },
      {
        id: 5,
        title: "Slides",
        path: '/backoffice/slides',
        icon: `pi pi-images`
      },
      {
        id: 6,
        title: "Usuarios",
        path: '/backoffice/usuarios',
        icon: `pi pi-users`
      },
      {
        id: 7,
        title: "Miembros",
        path: '/backoffice/members',
        icon: `pi pi-id-card`
      }
    ]    
  }
}
