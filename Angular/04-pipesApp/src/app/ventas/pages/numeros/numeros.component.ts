import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [ CommonModule, CardModule],
  templateUrl: './numeros.component.html'
})
export class NumerosComponent {
  
  ventasNetas: number = 2567789.5567;
  porcentaje:  number = 0.48;
}
