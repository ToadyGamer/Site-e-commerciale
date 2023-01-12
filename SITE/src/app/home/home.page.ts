import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

import CryptoJS from 'crypto-js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public ionicForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      identifiant:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])]
    });
  }

  userFound = false;

  ngOnInit() { localStorage.setItem("habilitationUser", "0"); }

  submitForm()
  { 
    this.userFound = false;

    fetch('http://127.0.0.1:3000/users') //récupération des comptes
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach(element => { //parcour des comptes
        if(element.identifiant == this.ionicForm.value.identifiant && element.password == CryptoJS.SHA1(this.ionicForm.value.password).toString()){ //comparaison d'un compte avec les données mises
          if(element.habilitation == 1) localStorage.setItem("habilitationUser", "1"); //chargement de l'app pour client
          else if(element.habilitation == 2) localStorage.setItem("habilitationUser", "2"); //chargement de l'app pour admin
          localStorage.setItem("idUser",element.id_user);
          this.router.navigate(['menu'], { replaceUrl: true });
          this.userFound = true;
        }
      });

      if(!this.userFound) this.presentAlert();

    })
    .catch(function(error) {
      console.log(error);
    });
  }

  presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'ERREUR';
    alert.message = "L'identifiant ou le mot de passe est incorrect.";
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    alert.present();
  }
}