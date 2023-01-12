import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

@Component({
  selector: 'app-produit-add-admin',
  templateUrl: './produit-add-admin.page.html',
  styleUrls: ['./produit-add-admin.page.scss'],
})
export class ProduitAddAdminPage implements OnInit {

  public ionicForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      nom:['',Validators.compose([Validators.required])],
      description:['',Validators.compose([Validators.required])],
      modele:['',Validators.compose([Validators.required])],
      marque:['',Validators.compose([Validators.required])],
      prix:['',Validators.compose([Validators.required])]
    });
  }

  hab : string;

  ngOnInit() {
    this.load();
  }

  load() {
    this.hab = localStorage.getItem("habilitationUser");
  }

  submitForm()
  {
    if(this.ionicForm.value.nom && this.ionicForm.value.description && this.ionicForm.value.modele && this.ionicForm.value.marque && this.ionicForm.value.prix){
      fetch(`http://localhost:3000/produit/add?&nom=${this.ionicForm.value.nom}&description=${this.ionicForm.value.description}&modele=${this.ionicForm.value.modele}&marque=${this.ionicForm.value.marque}&prix=${this.ionicForm.value.prix}`); //changer les infos du compte
      this.presentAlert("VALIDATION","Le produit a bien été créé.");
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
