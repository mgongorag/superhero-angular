import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})

export class BuscarHeroeComponent {

  heroes:Heroe[] = [];
  termino: string;

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { 
    
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
    })
  }

  public verHeroe(idx: number){
    
    console.log('el codigo es ' + idx)
    this.router.navigate(['/heroe', idx]);
  }

}
