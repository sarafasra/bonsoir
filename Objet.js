const voiture ={
    marque:"mercedes ",
    modele: "g-class",
    annee : 2020,

}
console.log (voiture);
console.log (voiture.marque);
console.log (voiture.annee);
voiture.annee = 2024;
console.log (voiture);
voiture.couleur = "rouge";
console.log (voiture);
delete voiture.modele;
console.log (voiture);


const etudiant = {
    nom : "sara",
    age : 19,
    sePresenter : function(){
        console.log ("Bonjour, je m’appelle" + [this.nom] + "et j’ai" + [this.age] + "ans." );
    }
}
etudiant.sePresenter();


const personne = {
    nom : "sara",
    sexe : "femme" ,
    prenom : "fasraoui",
};
for (let key in personne){
    console.log (key + ":" + personne[key]);
}


 const Class = {
    etudiant:["sara","ali","ahmed"],
    afficherEtudiants : function(){
        console.log (this.etudiant)
    }
 }
 Class.afficherEtudiants ();



 const livres = [
    {titre: "la boite", auteur:"ahmed sefrioui",annee : 2003},
    {titre: "antigone", auteur : "mohamed ht",annee : 2016},
    {titre : "dernier jour ", auteur : "vitor",annee : 2019},


  
 ];

  
 for (let i = 0; i < livres.length; i++){
    console.log (livres[i].titre);
 }

const entreprise = {
    adresse : {
               rue : "14 rue firdaous",
               ville : "oued zem",
               codePostal : "2356"
    }
};
console.log (entreprise.adresse.ville)


class Animal  {
     constructor (nom,type){
        this.nom = nom;
        this.type = type;
     }
        parler(){
          console.log (`nom ${this.nom}`);
          console.log (`type ${this.type}`);
        }
     
}
const chien = new Animal ("chien","compagnie");
chien.parler ();



