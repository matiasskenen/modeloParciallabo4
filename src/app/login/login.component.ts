import { CommonModule } from '@angular/common';import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, collectionData,setDoc, DocumentData, doc, addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { orderBy, query, where } from 'firebase/firestore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  public email: string = '';
  public password: string = '';
  public mensagges = "";

  loggedUser: string = "";
  flagError: boolean = false;
  msjError: string = "";


  isLoading = false;

  private sub!: Subscription;

  newMessage: string = '';

  constructor(private router: Router, private auth: Auth) {}

  loginUser()
  {
    signInWithEmailAndPassword(this.auth, this.email, this.password).then((res) => 
    {
      if ( res.user.email !== null)
        {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            this.router.navigate(["/peliculas"]);
          }, 1000);
        } 

      this.flagError = false;
    }).catch((e) => {
      this.flagError = true;
      console.log(e);

      switch(e.code)
      {
        case "auth/weak-password":
          this.msjError = "Contraseña demasiado corta.";
          break;
        case "auth/invalid-email":
          this.msjError = "Correo electrónico no válido.";
          break;
        case "auth/email-already-in-use":
          this.msjError = "El correo electrónico ya está en uso.";
          break;
        case "auth/user-not-found":
          this.msjError = "No se encontró ningún usuario con este correo.";
          break;
        case "auth/wrong-password":
          this.msjError = "Credenciales Invalidas.";
          break;
        case "auth/invalid-credential":
          this.msjError = "Credenciales no válidas.";
          break;
        case "auth/account-exists-with-different-credential":
          this.msjError = "Ya existe una cuenta con un correo diferente.";
          break;
        case "auth/credential-already-in-use":
          this.msjError = "Estas credenciales ya están en uso por otra cuenta.";
          break;
        default:
          this.msjError = "Error: " + e.code;
          break;
      }
    })
  }

  redirectToSignIn() {
    this.router.navigate(["/singin"]);
  }
  
  dato = "datsos del padre";

  recibirDato(datoHijo: string)
  {
    this.dato = datoHijo
  }


  @Output() enviarDato = new EventEmitter<string>();

  datoHijo1 = "Dato del hijo 1";

  enviarDatoFn()
  {
    this.enviarDato.emit(this.dato);
  }

  autocompletar(email: string, password: string) 
  {
    this.email = email;
    this.password = password;
  }



}
