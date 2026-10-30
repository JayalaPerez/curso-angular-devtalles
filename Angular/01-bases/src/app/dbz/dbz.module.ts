import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainPageComponent,
    FormsModule,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
