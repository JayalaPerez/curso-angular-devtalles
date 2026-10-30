import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  imports: [
    CommonModule,
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  ],
  exports: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    HttpClientModule
  ]
})
export class GifsModule { }
