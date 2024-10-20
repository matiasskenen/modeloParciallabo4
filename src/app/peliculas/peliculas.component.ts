import { Component } from '@angular/core';
import { Peliculainter } from '../interfces/peliculainter';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
  

export class PeliculasComponent 
{

  peliculas: Peliculainter[] = [
    {
      id: 1,
      nombre: 'El conjuro',
      tipo: 'terror',
      fechaEstreno: new Date('2013-07-19'),
      cantidadPublico: 5000000,
      foto: 'url_de_foto1.jpg',
      protagonista: 'Vera Farmiga'
    },
    {
      id: 2,
      nombre: 'La la land',
      tipo: 'amor',
      fechaEstreno: new Date('2016-12-09'),
      cantidadPublico: 8000000,
      foto: 'url_de_foto2.jpg',
      protagonista: 'Ryan Gosling'
    }
    // Agrega más películas según lo necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
