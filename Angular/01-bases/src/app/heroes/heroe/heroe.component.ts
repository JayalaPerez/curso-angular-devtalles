import { Component } from '@angular/core';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  standalone: true,
})

export class HeroeComponent {

  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  
  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  cambiarHeroe(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

}