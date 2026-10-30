import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados() {
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService ) { }

}
