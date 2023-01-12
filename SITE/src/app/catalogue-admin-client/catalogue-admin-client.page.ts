import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue-admin-client',
  templateUrl: './catalogue-admin-client.page.html',
  styleUrls: ['./catalogue-admin-client.page.scss'],
})
export class CatalogueAdminClientPage implements OnInit {

  constructor(private router: Router) {}
  
  produits = [];
  photos = [];
  hab:string;
  
  ngOnInit() {
    this.getproduits();
    this.getphotos();
    this.hab = localStorage.getItem("habilitationUser");
  }

  getproduits() {
    fetch(`http://127.0.0.1:3000/produits?achetable=1`) //récupération des produits
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

  gomenu() { this.router.navigate(['menu'], { replaceUrl: true }); }

  gocomptes() { this.router.navigate(['comptes-admin-client'], { replaceUrl: true }); }

  goproduits() { this.router.navigate(['produits-admin'], { replaceUrl: true }); }

  gocatalogue() { this.router.navigate(['catalogue-admin-client'], { replaceUrl: true }); }

  gocommandes() { this.router.navigate(['commandes-admin-client'], { replaceUrl: true }); }
  
  gologin() { this.router.navigate(['home'], { replaceUrl: true }); }
}
