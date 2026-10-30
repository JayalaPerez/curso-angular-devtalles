import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  
    borrarHeroe() {
      console.log('Heroes ANTES de borrar:', this.heroes);
    
      const heroeEliminado = this.heroes.shift() || ''; // Guarda el eliminado
      this.heroeBorrado = heroeEliminado;
    
      console.log('Héroe eliminado:', this.heroeBorrado);
      console.log('Heroes DESPUÉS de borrar:', this.heroes);
    }

}
