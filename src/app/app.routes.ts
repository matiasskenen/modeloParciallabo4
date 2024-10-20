import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AltapeliculaComponent } from './altapelicula/altapelicula.component';
import { AltoactorComponent } from './altoactor/altoactor.component';
import { ActoresComponent } from './actores/actores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'altapelicula', component: AltapeliculaComponent },
    { path: 'altaactores', component: AltoactorComponent },
    { path: 'actores', component: ActoresComponent },
    

    /*{
        path: 'juegos', 
        loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule)
    }

     */
];
