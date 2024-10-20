import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { confirmarCalveValidator } from '../validadores/clave.validator'; 
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from "./paises/tabla-paises/tabla-paises.component";

@Component({
  selector: 'app-altoactor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TablaPaisesComponent],
  templateUrl: './altoactor.component.html',
  styleUrl: './altoactor.component.scss'
})
export class AltoactorComponent {

  public email: string = '';
  public password: string = '';
  public mensagges = "";

  loggedUser: string = "";
  flagError: boolean = false;
  msjError: string = "";
  
  isLoading = false;

  form! : FormGroup;

  resultado : string = "";

  constructor(public auth: Auth, private router : Router, private fb: FormBuilder)
  {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl("", [Validators.min(18), Validators.max(99)]),
      mail: new FormControl("", Validators.email),
      clave: new FormControl("", Validators.minLength(4)),
      repiteClave: new FormControl("", Validators.required),
      documento: new FormControl("", [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
      pais: new FormControl("", [Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    }, confirmarCalveValidator());
  }
  
  get usuario() {
    return this.form.get('nombre');
  }

  get apellido() {
    return this.form.get('apellido');
  }

  get nombre() {
    return this.form.get('nombre');
  }
  get edad() {
    return this.form.get('edad');
  }
  get mail() {
    return this.form.get('mail');
  }
  get clave() {
    return this.form.get('clave');
  }
  get repiteClave() {
    return this.form.get('repiteClave');
  }

  get documento() {
    return this.form.get('documento');
  }

  get pais() {
    return this.form.get('pais');
  }


  enviar()
  {

    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
    } else {
      this.resultado = "El formulario no es válido, Completar los demas Campos"
      this.form.markAllAsTouched();
    }
  

    const checkboxesIntereses = document.querySelectorAll<HTMLInputElement>('input[name="intereses"]:checked');

    let interesesSeleccionados: string[] = [];

    checkboxesIntereses.forEach((checkbox: HTMLInputElement) => {
      interesesSeleccionados.push(checkbox.value);
    });

    const checkboxesCalificacion = document.querySelectorAll<HTMLInputElement>('input[name="calificacion"]:checked');

    let CalificacionSeleccionados: string[] = [];


    checkboxesCalificacion.forEach((checkbox: HTMLInputElement) => {
      CalificacionSeleccionados.push(checkbox.value);
    });


    const formValues = this.form.value;
    
  }

  paisSeleccionado: string = '';

  setPaisSeleccionado(pais: string) {
    this.paisSeleccionado = pais;
    console.log(this.paisSeleccionado)
  }

  alSeleccionarUnPais(pais: any) {
    console.log("El país seleccionado: ", pais); // Asegúrate de que está imprimiendo el país seleccionado
    this.setPaisSeleccionado(pais); // Configura el país seleccionado
  }


}
