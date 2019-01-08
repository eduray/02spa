
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';



const APP_ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroes/:criteria', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '**',  pathMatch: 'full', redirectTo: 'home' },
];

// Se utliza la opcion hash para manejo de rutas con #, es para no perder la referencia, de la otra manera 
// es como tener un directorio
export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
