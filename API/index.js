const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log('http://localhost:3000/')
})

const mysql = require('mysql2');
const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'bdd_ecommerce'
});

//=====================================GET=====================================
app.get("/commander",(req,res) => {
    const c=req.query.commande;
    if(c)
    {
        connection.query(`SELECT * FROM commander WHERE commande = ${c}`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`SELECT * FROM commander`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
});

app.get("/commandes",(req,res) => {
    const i=req.query.id;
    const u=req.query.user;
    if(i == null && u == null) //voir si on met un parametre avec blablabla ?id=1
    {
        connection.query(`SELECT * FROM commandes`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else if(i != null)
    {
        connection.query(`SELECT * FROM commandes WHERE id_commande = ${i}`, (err,rows) =>
        {
            if(!err)
                res.send(rows);
        })
    }
    else if(u != null)
    {
        connection.query(`SELECT * FROM commandes WHERE user = ${u}`, (err,rows) =>
        {
            if(!err)
                res.send(rows);
        })
    }
});

app.get("/habilitations",(req,res) => {
    connection.query(`SELECT * FROM habilitations`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/produits",(req,res) => {
    const i=req.query.id;
    const a=req.query.achetable;
    if(i) //voir si on met un parametre avec blablabla ?id=1
    {
        connection.query(`SELECT * FROM produits WHERE id_produit = ${i}`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else if(a)
    {
        connection.query(`SELECT * FROM produits WHERE achetable = ${a}`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`SELECT * FROM produits`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
});

app.get("/photos",(req,res) => {
    const i=req.query.id;
    const p=req.query.produit;
    if(i != null)
    {
        connection.query(`SELECT * FROM photos WHERE id_photo = ${i}`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else if(p != null)
    {
        connection.query(`SELECT * FROM photos WHERE produit = ${p}`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`SELECT * FROM photos`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
});

app.get("/users",(req,res) => {
    const i=req.query.id;
    if(i == null) //voir si on met un parametre avec blablabla ?id=1
    {
        connection.query(`SELECT * FROM users INNER JOIN habilitations ON id_habilitation = habilitation`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`SELECT * FROM users INNER JOIN habilitations ON id_habilitation = habilitation WHERE id_user = ${i}`, (err,rows) =>
        {
            if(!err)
                res.send(rows);
        })
    }
});

//=====================================MODIFY=====================================
app.get("/user/modify",(req,res) => {
    const id=req.query.id;
    const n=req.query.nom;
    const pr=req.query.prenom;
    const ide=req.query.identifiant;
    const pa=req.query.password;
    const h=req.query.habilitation;

    connection.query(`UPDATE users SET nom = '${n}', prenom = '${pr}', identifiant = '${ide}', password = '${pa}', habilitation = '${h}' WHERE id_user = '${id}'`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/produit/modify",(req,res) => {
    const id=req.query.id;
    const a=req.query.achetable;
    const n=req.query.nom;
    const d=req.query.description;
    const mo=req.query.modele;
    const ma=req.query.marque;
    const p=req.query.prix;

    if(a == null)
    {
        connection.query(`UPDATE produits SET nom = '${n}',description = '${d}',modele = '${mo}',marque = '${ma}',prix = '${p}' WHERE id_produit = '${id}'`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`UPDATE produits SET achetable = '${a}' WHERE id_produit = '${id}'`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
});

app.get("/photo/modify",(req,res) => {
    const id=req.query.id;
    const l=req.query.lien;

    connection.query(`UPDATE photos SET lien_photo = '${l}' WHERE id_photo = '${id}'`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

//=====================================ADD=====================================
app.get("/user/add",(req,res) => {
    const n=req.query.nom;
    const pr=req.query.prenom;
    const ide=req.query.identifiant;
    const pa=req.query.password;
    const h=req.query.habilitation;

    connection.query(`INSERT INTO users (nom, prenom, identifiant, password, habilitation) VALUES ('${n}','${pr}','${ide}','${pa}','${h}')`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/produit/add",(req,res) => {
    const n=req.query.nom;
    const d=req.query.description;
    const mo=req.query.modele;
    const ma=req.query.marque;
    const p=req.query.prix;

    connection.query(`INSERT INTO produits (nom, description, modele, marque, prix, achetable) VALUES ('${n}','${d}','${mo}','${ma}','${p}' , 0)`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/photo/add",(req,res) => {
    const l=req.query.lien;
    const p=req.query.produit;

    connection.query(`INSERT INTO photos (lien_photo, produit) VALUES ('${l}','${p}')`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

//=====================================DELETE=====================================
app.get("/user/delete",(req,res) => {
    const id=req.query.id;

    connection.query(`DELETE FROM users WHERE id_user = '${id}'`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/produit/delete",(req,res) => {
    const id=req.query.id;

    connection.query(`DELETE FROM produits WHERE id_produit = '${id}'`, (err,rows) => 
    {
        if(!err)
            res.send(rows);
    })
});

app.get("/photos/delete",(req,res) => {
    const idproduit=req.query.idproduit; //id du produit
    const idphoto=req.query.idphoto; //id du produit

    if(idproduit != null && idphoto == null)
    {
        connection.query(`DELETE FROM photos WHERE produit = '${idproduit}'`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
    else
    {
        connection.query(`DELETE FROM photos WHERE id_photo = '${idphoto}'`, (err,rows) => 
        {
            if(!err)
                res.send(rows);
        })
    }
});