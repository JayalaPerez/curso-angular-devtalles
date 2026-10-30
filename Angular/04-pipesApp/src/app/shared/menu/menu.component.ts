import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: ' pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }

}
