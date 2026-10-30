import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, TitleCasePipe} from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

//Modulo personalizado de PrimeNG
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el idioma del local 
import localEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
registerLocaleData( localEs );


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, 
    CommonModule, 
    TitleCasePipe,
    SharedModule,
    VentasModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
})
export class AppComponent implements OnInit{

  constructor( private PrimengConfig: PrimeNGConfig ){}

    ngOnInit(){
     
      this.PrimengConfig.ripple = true;
    
    }


  title = 'pipesApp';

  nombre: string = 'Juan';


  mostrarNombre(){
    console.log( this.nombre );
    
  }

}
