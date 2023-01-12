import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

@Component({
  selector: 'app-produit-admin',
  templateUrl: './produit-admin.page.html',
  styleUrls: ['./produit-admin.page.scss'],
})
export class ProduitAdminPage implements OnInit {

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
  idproduit : string;
  produit = [];

  ngOnInit() {
    this.load();
  }

  async load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.idproduit = localStorage.getItem("idproduit");
    await
    this.getproduit(this.idproduit);
  }

  getproduit(id){
    fetch(`http://127.0.0.1:3000/produits?id=${id}`) //récupération du produit
    .then((resp) => resp.json())
    .then((data) => {
      this.produit = data;
      console.log(this.produit);
      this.ionicForm.controls["nom"].setValue(this.produit[0].nom);
      this.ionicForm.controls["description"].setValue(this.produit[0].description);
      this.ionicForm.controls["modele"].setValue(this.produit[0].modele);
      this.ionicForm.controls["marque"].setValue(this.produit[0].marque);
      this.ionicForm.controls["prix"].setValue(this.produit[0].prix);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  submitForm()
  {
    if(this.ionicForm.value.nom && this.ionicForm.value.description && this.ionicForm.value.modele && this.ionicForm.value.marque && this.ionicForm.value.prix){
      fetch(`http://localhost:3000/produit/modify?nom=${this.ionicForm.value.nom}&description=${this.ionicForm.value.description}&modele=${this.ionicForm.value.modele}&marque=${this.ionicForm.value.marque}&prix=${this.ionicForm.value.prix}&id=${this.idproduit}`); //changer les infos du compte
      this.presentAlert("VALIDATION","Le produit a bien été modifié.");
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
