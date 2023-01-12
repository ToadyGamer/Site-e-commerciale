import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-compte-add-admin',
  templateUrl: './compte-add-admin.page.html',
  styleUrls: ['./compte-add-admin.page.scss'],
})
export class CompteAddAdminPage implements OnInit {

  public ionicForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      nom:['',Validators.compose([Validators.required])],
      prenom:['',Validators.compose([Validators.required])],
      identifiant:['',Validators.compose([Validators.required])],
      password1:['',Validators.compose([Validators.required])],
      password2:['',Validators.compose([Validators.required])],
      habilitation:['',Validators.compose([Validators.required])],
    });
  }

  hab : string;
  habilitations = [];

  ngOnInit() {
    this.load();
  }

  async load() {
    this.hab = localStorage.getItem("habilitationUser");
    await
    this.gethabilitation();
  }

  gethabilitation(){
    fetch(`http://127.0.0.1:3000/habilitations`) //récupération des habilitations
    .then((resp) => resp.json())
    .then((data) => {
      this.habilitations = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  submitForm()
  {
    if(this.ionicForm.value.nom && this.ionicForm.value.prenom && this.ionicForm.value.identifiant && this.ionicForm.value.password1 && this.ionicForm.value.password2 && this.ionicForm.value.habilitation){
      if(this.ionicForm.value.password1 == this.ionicForm.value.password2)
      {
        let passSha = CryptoJS.SHA1(this.ionicForm.value.password1);
        fetch(`http://localhost:3000/user/add?&nom=${this.ionicForm.value.nom}&prenom=${this.ionicForm.value.prenom}&identifiant=${this.ionicForm.value.identifiant}&password=${passSha.toString()}&habilitation=${this.ionicForm.value.habilitation}`); //changer les infos du compte
        this.presentAlert("VALIDATION","Le compte a bien été créé.");
      }
      else {this.presentAlert("ERREUR","Les 2 mots de passe ne sont pas identiques.");}
    }
    else {this.presentAlert("ERREUR","Veuillez remplir tous les champs.");}
  }

  gomenu() { this.router.navigate(['menu'], { replaceUrl: true }); }

  gocomptes() { this.router.navigate(['comptes-admin-client'], { replaceUrl: true }); }

  goproduits() { this.router.navigate(['produits-admin'], { replaceUrl: true }); }

  gocatalogue() { this.router.navigate(['catalogue-admin-client'], { replaceUrl: true }); }

  gocommandes() { this.router.navigate(['commandes-admin-client'], { replaceUrl: true }); }
  
  gologin() { this.router.navigate(['home'], { replaceUrl: true }); }

  presentAlert(Titre, Message) {
    const alert = document.createElement('ion-alert');
    alert.header = Titre;
    alert.message = Message;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    alert.present();
  }
}
