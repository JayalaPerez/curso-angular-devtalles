import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { NgFor, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {


  get historial() {
    return this.gifsService.historial;
  }


  constructor( private gifsService: GifsService ) {}

    buscar( termino: string ) {
      this.gifsService.buscarGifs( termino );
    }
}