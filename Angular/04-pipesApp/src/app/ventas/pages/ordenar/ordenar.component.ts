import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { VuelaPipe } from '../../pipes/vuela.pipe';
import { OrdenarPipe } from '../../pipes/ordenar.pipe';


@Component({
  selector: 'app-ordenar',
  standalone: true,
  imports: [
    CommonModule,
    MayusculasPipe,
    PrimeNgModule,
    VuelaPipe,
    OrdenarPipe
],
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }

  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
    console.log(valor);
  }

}
