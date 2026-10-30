import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route  } from '@angular/router';

@Component({
  selector: 'app-heroe',
  standalone: false,
  templateUrl: './heroe.component.html',
  styles: ``
})
export class HeroeComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id })=> console.log ( id ) );
  }

}
