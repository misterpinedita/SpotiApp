import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

// Contiene las rutas que vamos a usar en SpotiApp

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistaComponent},
    // cualquier otra ruta debe redireccionar al home

    // 1 cualquier path vacio redirecciona al home
    { path: '', pathMatch: 'full',  redirectTo: 'home'},
    // 2 cualquier otro path redirecciona al home
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

];
