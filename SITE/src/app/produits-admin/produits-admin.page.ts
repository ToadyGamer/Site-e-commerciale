import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits-admin',
  templateUrl: './produits-admin.page.html',
  styleUrls: ['./produits-admin.page.scss'],
})
export class ProduitsAdminPage implements OnInit {

  constructor(private router: Router) {}
  
  produits = [];
  photos = [];
  achetable;
  hab : string;
  
  ngOnInit() {
    this.load();
  }

  load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.getproduits();
    this.getphotos();
  }
  changeachetable(id, value){
    let localvalue = 0;
    value ? 0 : localvalue = 1;

    fetch(`http://localhost:3000/produit/modify?id=${id}&achetable=${localvalue}`); //changer les infos du compte
    window.location.reload();
  }

  getproduits() {
    fetch(`http://127.0.0.1:3000/produits`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.produits = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getphotos() {
    fetch(`http://127.0.0.1:3000/photos`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.photos = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  produitcreation() { this.router.navigate(['produit-add-admin'], { replaceUrl: true }); }

  produitmodification(idproduit) { this.router.navigate(['produit-admin'], { replaceUrl: true }); localStorage.setItem("idproduit",idproduit); }

  photosmodification(idproduit) { this.router.navigate(['photos-admin'], { replaceUrl: true }); localStorage.setItem("idproduit",idproduit);}

  produitsuppression(idproduit, nom) {
    const alert = document.createElement('ion-alert');
    alert.header = "SUPPRESSION";
    alert.message = `Voulez vous vraiment supprimer le produit '${nom}' ?`;
    alert.buttons = [{ text: 'Non',},
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => { 
        fetch(`http://127.0.0.1:3000/produit/delete?id=${idproduit}`);
        fetch(`http://127.0.0.1:3000/photos/delete?idproduit=${idproduit}`);
        window.location.reload(); }//changer les infos du compte
    }];

    document.body.appendChild(alert);
    alert.present();
  }

  gomenu() { this.router.navigate(['menu'], { replaceUrl: true }); }

  gocomptes() { this.router.navigate(['comptes-admin-client'], { replaceUrl: true }); }

  goproduits() { this.router.navigate(['produits-admin'], { replaceUrl: true }); }

  gocatalogue() { this.router.navigate(['catalogue-admin-client'], { replaceUrl: true }); }

  gocommandes() { this.router.navigate(['commandes-admin-client'], { replaceUrl: true }); }
  
  gologin() { this.router.navigate(['home'], { replaceUrl: true }); }
}
