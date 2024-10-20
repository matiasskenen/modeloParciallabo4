import { Component } from '@angular/core';
import { PaisesserviceService } from '../../../servicios/paises/paisesservice.service';
import { AltoactorComponent } from '../../altoactor.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss'
})

export class TablaPaisesComponent{
  paises: any[] = [];

  constructor(private paisesService: PaisesserviceService, private altaActorComponent: AltoactorComponent) { }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  seleccionarPais(pais: any): void {
    this.altaActorComponent.setPaisSeleccionado(pais); // Cambié esto para acceder a 'common'
  }

}
