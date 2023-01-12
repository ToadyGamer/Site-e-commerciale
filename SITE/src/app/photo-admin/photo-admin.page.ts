import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { FormGroup }  from "@angular/forms";
import  { FormBuilder }  from "@angular/forms";
import  { Validators }  from "@angular/forms";

@Component({
  selector: 'app-photo-admin',
  templateUrl: './photo-admin.page.html',
  styleUrls: ['./photo-admin.page.scss'],
})
export class PhotoAdminPage implements OnInit {

  public ionicForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
      lien:['',Validators.compose([Validators.required])]
    });
  }

  hab : string;
  idphoto : string;
  photo = [];

  ngOnInit() {
    this.load();
  }

  async load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.idphoto = localStorage.getItem("idphoto");
    await
    this.getphoto();
  }

  getphoto() {
    fetch(`http://127.0.0.1:3000/photos?id=${this.idphoto}`) //récupération le compte de la personne connecté
    .then((resp) => resp.json())
    .then((data) => {
      this.photo = data;
      this.ionicForm.controls["lien"].setValue(this.photo[0].lien_photo);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  submitForm()
  {
    if(this.ionicForm.value.lien){
      fetch(`http://localhost:3000/photo/modify?&lien=${this.ionicForm.value.lien}&id=${this.idphoto}`); //changer les infos du compte
      this.presentAlert("VALIDATION","La photo a bien été modifiée.");
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
