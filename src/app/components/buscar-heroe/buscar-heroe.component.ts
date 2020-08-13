import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})

export class BuscarHeroeComponent {

  heroes:any[] = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService) { 
    
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
      console.log(this.heroes);
    })
  }

}
