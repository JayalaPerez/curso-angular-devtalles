import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';

import { PaisService } from '../../services/pais.service';
import { CountryObject } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, PaisTablaComponent, PaisInputComponent],
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryObject[] = [];
  paisesSugeridos: CountryObject[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    if (!termino || termino.trim().length === 0) {
      this.hayError = false;
      this.paises = [];
      return;
    }

    this.hayError = false;
    this.termino = termino.trim();
    this.paisesSugeridos = []; // Limpia las sugerencias al confirmar la búsqueda

    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (resp) => {
          const resultados = resp.data?.objects || [];

          if (resultados.length === 0) {
            this.hayError = true;
            this.paises = [];
            console.warn('No se encontraron coincidencias para:', this.termino);
            return;
          }

          this.hayError = false;
          this.paises = resultados;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
          console.error('Error en la petición:', err);
        }
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;

    if (!termino || termino.trim().length === 0) {
      this.paisesSugeridos = [];
      return;
    }

    this.paisService.buscarPais(termino.trim())
      .subscribe({
        next: (resp) => {
          // Extrae el arreglo y toma solo los primeros 5 elementos con slice
          const resultados = resp.data?.objects || [];
          this.paisesSugeridos = resultados.slice(0, 5);
        },
        error: () => {
          this.paisesSugeridos = [];
        }
      });
  }

}