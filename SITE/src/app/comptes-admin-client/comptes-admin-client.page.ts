import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptes-admin-client',
  templateUrl: './comptes-admin-client.page.html',
  styleUrls: ['./comptes-admin-client.page.scss'],
})
export class ComptesAdminClientPage implements OnInit {

  constructor(private router: Router) { }

  hab : string;
  iduser : string;

  users = [];

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.load();
  }

  async load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.iduser = localStorage.getItem("idUser");
    await
    this.getusers();
  }

  getusers() {
    if(this.hab == "1") {
      fetch(`http://127.0.0.1:3000/users?id=${this.iduser}`) //récupération le compte de la personne connecté
      .then((resp) => resp.json())
      .then((data) => {
        this.users = data;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
    else if(this.hab == "2") {
      fetch('http://127.0.0.1:3000/users') //récupération des comptes
      .then((resp) => resp.json())
      .then((data) => {
        this.users = data;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  comptesuppression(id, nom, prenom){
    const alert = document.createElement('ion-alert');
    alert.header = "SUPPRESSION";
    alert.message = `Voulez vous vraiment supprimer le compte de ${nom} ${prenom} ?`;
    alert.buttons = [{ text: 'Non',},
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => { fetch(`http://localhost:3000/user/delete?id=${id}`); window.location.reload(); }//changer les infos du compte
    }];

    document.body.appendChild(alert);
    alert.present();
  }

  comptecreation() { this.router.navigate(['compte-add-admin'], { replaceUrl: true }); }

  gocompte(index) { this.router.navigate(['compte-admin-client'], { replaceUrl: true }); localStorage.setItem("idusermodification",index);}

  gomenu() { this.router.navigate(['menu'], { replaceUrl: true }); }

  gocomptes() { this.router.navigate(['comptes-admin-client'], { replaceUrl: true }); }

  goproduits() { this.router.navigate(['produits-admin'], { replaceUrl: true }); }

  gocatalogue() { this.router.navigate(['catalogue-admin-client'], { replaceUrl: true }); }

  gocommandes() { this.router.navigate(['commandes-admin-client'], { replaceUrl: true }); }
  
  gologin() { this.router.navigate(['home'], { replaceUrl: true }); }
}
