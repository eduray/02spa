import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

// Services
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../domains/heroe.domain';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  public _heroes: Heroe[] = [];
  public _title: string;


  constructor(private _heroesService: HeroesService,
              private _router: Router,
              private _activeRoute: ActivatedRoute
             ) {
      this._activeRoute.params.subscribe( params => {

        if ( params['criteria'] !== undefined ) {
          this._title = 'Result Search Heroes';
          this._heroes = this._heroesService._getSearchHeroes( params['criteria'] );
          console.log( this._heroes );
        } else {
          this._title = 'Heroes ';
          this._heroes = this._heroesService._getHeroes();
          console.log(this._heroes);
        }

      });
  }

  showHeroeDetail( idx: number ) {
      this._router.navigate(['/heroe', idx]);
  }
}
