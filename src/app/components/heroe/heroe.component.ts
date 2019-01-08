import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../domains/heroe.domain';

// services
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})

export class HeroeComponent implements OnInit {

   public _heroeSelected: Heroe;

  constructor( private _activatedRoute: ActivatedRoute,
               private heroesServices: HeroesService ) {

         this._activatedRoute.params.subscribe( params => {
           console.log(params['id']);
           this._heroeSelected = heroesServices._getHeroe(params['id']);
           console.log(this._heroeSelected);
        });

  }

  ngOnInit() {
  }

}
