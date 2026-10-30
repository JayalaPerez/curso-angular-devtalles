import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PersonajesComponent } from "../personajes/personajes.component";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajesComponent, AgregarComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje){
  //   // console.log('Main Page Component');
  //   // console.log(argumento);
  //   this.personajes.push( argumento );
  // }

  // constructor( private dbzService: DbzService){

  // }
  constructor(){
    
  }

}
