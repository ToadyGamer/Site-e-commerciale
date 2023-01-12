import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

@Component({
  selector: 'app-photo-add-admin',
  templateUrl: './photo-add-admin.page.html',
  styleUrls: ['./photo-add-admin.page.scss'],
})
export class PhotoAddAdminPage implements OnInit {


  public ionicForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      lien:['',Validators.compose([Validators.required])]
    });
  }

  hab : string;
  idproduit : string;

  ngOnInit() {
    this.load();
  }

  load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.idproduit = localStorage.getItem("idproduit");
  }

  submitForm()
  {
    if(this.ionicForm.value.lien){
      fetch(`http://localhost:3000/photo/add?&lien=${this.ionicForm.value.lien}&produit=${this.idproduit}`); //changer les infos du compte
      this.presentAlert("VALIDATION","La photo a bien été créé.");
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
