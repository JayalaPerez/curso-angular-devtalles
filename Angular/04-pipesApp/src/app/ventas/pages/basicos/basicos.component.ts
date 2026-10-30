import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-basicos',
  standalone: true,
  imports: [
    CommonModule,
    CardModule
  ],
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'juan';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'jUaN aYalA';

  fecha: Date = new Date(); //el dia de hoy

}
