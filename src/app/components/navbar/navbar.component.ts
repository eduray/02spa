import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _router: Router,
               private _heroesService: HeroesService) {

  }

  ngOnInit() {
  }

  buscarHeroe ( criteria: string) {
     console.log(criteria);
     this._router.navigate( ['/heroes',  criteria ]);
  }

}
