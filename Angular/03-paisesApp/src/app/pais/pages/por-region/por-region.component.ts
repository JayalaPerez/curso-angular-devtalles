import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CountryObject } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';
import { PaisTablaComponent } from '../../components/pais-tabla/pais-tabla.component';

@Component({
  selector: 'app-por-region',
  standalone: true,
  imports: [CommonModule,PaisTablaComponent],
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: CountryObject[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    
    this.regionActiva = region;
    this.paises = [];
    this.hayError = false;

    this.paisService.buscarRegion(region)
      .subscribe({
        next: (paises) => {
          const resultados = paises.data?.objects || [];
          this.paises = resultados;
        },
        error: (err) => {
          this.hayError = true;
          console.error('Error en la petición:', err);
        }
      });
  }

  private newMethod() {
    return this;
  }

  


  

}
