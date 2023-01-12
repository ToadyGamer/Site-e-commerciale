import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { jsPDF } from "jspdf";
import 'jspdf-autotable';

@Component({
  selector: 'app-commandes-admin-client',
  templateUrl: './commandes-admin-client.page.html',
  styleUrls: ['./commandes-admin-client.page.scss'],
})
export class CommandesAdminClientPage implements OnInit {

  constructor(private router: Router) {}
  
  hab : string;
  iduser : string;
  
  commandes = [];
  commander = [];
  users = [];
  produits = [];

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.load();
  }

  async load() {
    this.hab = localStorage.getItem("habilitationUser");
    this.iduser = localStorage.getItem("idUser");
    if (this.hab == '1') await this.getcommandes(this.iduser);
    else await this.getallcommandes();
    this.getusers();
    this.getcommander();
    this.getproduits();
  }

  getcommandes(iduser) {
    fetch(`http://127.0.0.1:3000/commandes?user=${iduser}`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.commandes = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getallcommandes() {
    fetch(`http://127.0.0.1:3000/commandes`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.commandes = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getcommander(){
    fetch(`http://127.0.0.1:3000/commander`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.commander = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getusers(){
    fetch(`http://127.0.0.1:3000/users`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.users = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  getproduits(){
    fetch(`http://127.0.0.1:3000/produits`) //récupération des produits
    .then((resp) => resp.json())
    .then((data) => {
      this.produits = data;
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  async export(idcommande, iduser, adresse, codepostal, ville, prixtotal){
    console.log(`numéro : ${idcommande}`);
    console.log(`numéro : ${iduser}`);
    console.log(`numéro : ${adresse}`);
    console.log(`numéro : ${codepostal}`);
    console.log(`numéro : ${ville}`);
    console.log(`numéro : ${prixtotal}`);
    const doc = new jsPDF();
    
    // doc.text('My PDF Table', 11, 8);
    // doc.setFontSize(11);
    // doc.setTextColor(100);
    
    doc.setFontSize(18);
    doc.text(`Bon de commande n°${idcommande}`, 80, 10); //ID COMMANDE
    doc.setFontSize(12);

    await fetch(`http://127.0.0.1:3000/users?id=${iduser}`) //NOM PRENOM DU COMMANDIRAITE
    .then((resp) => resp.json())
    .then((data) => {
      doc.text(`Commanditaire : ${data[0].nom} ${data[0].prenom}`, 10, 20);
    })
    .catch(function(error) {
      console.log(error);
    });

    doc.text(`Adresse de livraison : ${adresse}`, 10, 30); //ADRESSE DE LIVRAISON

    doc.text(`${codepostal}`, 65.5, 40); //CODE POSTA
    
    doc.text(`${ville}`, 65.5, 50); //VILLE
    
    let idproduits = [];

    await fetch(`http://127.0.0.1:3000/commander?commande=${idcommande}`) //PRODUITS (ID) DANS LA COMMANDE
    .then((resp) => resp.json())
    .then((data) => {
      idproduits = data;
    })
    .catch(function(error) {
      console.log(error);
    });
    
    let allproduits = [];

    await fetch(`http://127.0.0.1:3000/produits`) //TOUS LES PRODUITS
    .then((resp) => resp.json())
    .then((data) => {
      allproduits = data;
    })
    .catch(function(error) {
      console.log(error);
    });

    
    let header = [["Code article","Désignation", "Prix", "Quantité"]]
    let produitsincommande = [];
    
    allproduits.forEach(element1 => { //ON REGARDE SI LES PRODUITS SONT DANS LA COMMANDE, SI OUI ON ADD DANS LA LISTE DES PRODUITS
      idproduits.forEach(element2 => {
        if(element1.id_produit == element2.produit_id){
          produitsincommande.push([`${element1.id_produit}`,`${element1.nom}`,`${element1.prix}€`,`${element2.quantite}`]);
        }
      });
    });
    
    (doc as any).autoTable({ //CREER LE TABLEAU POUR LES PRODUITS DANS LE PDF
      startY: 55,
      head: header,
      body: produitsincommande
    })
    
    let line = 65  + produitsincommande.length * 10;

    doc.text(`TOTAL : ${prixtotal}€`, 10, line);

    doc.save(`Commande_${idcommande}.pdf`);
  }

  gomenu() { this.router.navigate(['menu'], { replaceUrl: true }); }

  gocomptes() { this.router.navigate(['comptes-admin-client'], { replaceUrl: true }); }

  goproduits() { this.router.navigate(['produits-admin'], { replaceUrl: true }); }

  gocatalogue() { this.router.navigate(['catalogue-admin-client'], { replaceUrl: true }); }

  gocommandes() { this.router.navigate(['commandes-admin-client'], { replaceUrl: true }); }
  
  gologin() { this.router.navigate(['home'], { replaceUrl: true }); }
}
