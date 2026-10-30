import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
    `]
})
export class ListadoComponent implements OnInit{

  heroes: Heroe[] = [];

  constructor ( private HeroesService: HeroesService){}

  ngOnInit(): void {

    this.HeroesService.getHeroes()
      .subscribe( heroes => this.heroes = heroes);
    
  }

}
