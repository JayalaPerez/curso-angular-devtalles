import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { interval } from 'rxjs';
import { resolve } from 'path';
import { rejects } from 'assert';


@Component({
  selector: 'app-no-comunes',
  standalone: true,
  imports: [ CommonModule, CardModule, PrimeNgModule],
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Juana';
  genero: string = 'femenino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla' 
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Hernando','Eduardo','Fernando'];
  clientesMapa= {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }

    cambiarCliente() {
    if (this.genero === 'femenino') {
      this.nombre = 'Juan';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Juana';
      this.genero = 'femenino';
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan',
    edad: 40,
    direccion: 'Santiago, Chile'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }  
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() =>{
      resolve( 'Tenemos data de una promesa');
    }, 3500 );

  });


}
