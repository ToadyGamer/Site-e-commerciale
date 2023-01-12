import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos-admin',
  templateUrl: './photos-admin.page.html',
  styleUrls: ['./photos-admin.page.scss'],
})
export class PhotosAdminPage implements OnInit {

  constructor(private router: Router) {}
  
  photos = [];
  hab : string;
  
  ngOnInit() {
    this.getphotos(localStorage.getItem("idproduit"));
    this.hab = localStorage.getItem("habilitationUser");
  }

  getphotos(produit) {
    fetch(`http://127.0.0.1:3000/photos?produit=${produit}`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.photos = data;
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  photocreation() { this.router.navigate(['photo-add-admin'], { replaceUrl: true }); }

  photomodification(idphoto) { this.router.navigate(['photo-admin'], { replaceUrl: true }); localStorage.setItem("idphoto",idphoto); }

  photosuppression(idphoto) {
    const alert = document.createElement('ion-alert');
    alert.header = "SUPPRESSION";
    alert.message = `Voulez vous vraiment supprimer cette photo ?`;
    alert.buttons = [{ text: 'Non',},
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => { 
        fetch(`http://127.0.0.1:3000/photos/delete?idphoto=${idphoto}`);
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
