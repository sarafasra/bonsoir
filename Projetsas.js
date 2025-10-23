const prompt = require("prompt-sync")();
let  livres = [];
let Abonnes = [];
function introduirelivres(){
      const id_livre = prompt("entrer id du livre");
      const titre = prompt ("entrer titre du livre");
      const auteur = prompt ("entrer auteur du livre");
      const annéedepublication =prompt ("entrer Année de publication du livre");
      const disponible = prompt ("le livre est disponible    (oui/non)");



      const livre = {
        id_livre ,
        titre ,
        auteur ,
        annéedepublication ,
        disponible ,
      };
      livres.push(livre);
      console.log(` livre "${titre}" introduire`);
}
introduirelivres();


 

function ajouterlivres (){

 const nombre = parseInt(prompt("ajouter des livres"));
 for (let i = 0; i < nombre; i++) {
    const titre = prompt("Entrez le titre du livre :");
    const auteur = prompt("Entrez l'auteur du livre :");
    const  annéedepublication = prompt("Entrez  année de publication du livre ");
    console.log(` Livre ${i + 1}: ${titre} - ${auteur} - ${ annéedepublication}`);

}
}
ajouterlivres();




function afficherLivres() {
  if (livres.length === 0) {
    console.log("Aucun livre disponible.");
    return;
  }

  console.log("Liste des livres :");
  for (let i = 0; i < livres.length; i++) {
    const livre = livres[i];
    console.log(`Livre ${i + 1} : "${livre.titre}" - ${livre.auteur}`);
  }
}
afficherLivres();

function affichermenu(){
    let choix;
    do  {
  console.log("=== menu principale === ");
  console.log("1 introduire un livre");
  console.log("2 Ajouter un livre");
  console.log("3 Afficher un livre");
  console.log("4 Gestion des Abonnes");
  console.log("() Quitter");
  const choix = prompt(" Choisir une option ");
switch (choix) {
      case "1": 
      introduirelivres();
      break;
      case "2":
        ajouterlivres();
        break;
      case "3" :
        afficherLivres();
        break;
      case "5" :
        gestionabonnes();
        break;;
     case "6" :
          console.log("Quitter");
     break;
     default:
        console.log ("choix invalide")
  }}
  while (choix!=="5")
  

}
affichermenu();



    




function afficherlivresdisponible (){
const disponible = livres.filter (livre =>livre.disponible)
if (disponible.length===0){
    console.log ("livres non disponible");
}else {
    console.log ("livres disponible");
    disponible.forEach((livres,index) => {
     console.log(`${index+ 1} ${livres.titre} ${livres.auteur} ${livres.annéedepublication}`)
    })
}
}
 afficherlivresdisponible ();



function rechercherLivreParID(id) {
  const livreTrouve = livres.find(livre => livre.id_livre == id);
  if (livreTrouve) {
    console.log(" Livre trouvé :");
    console.log(`ID : ${livreTrouve.id_livre}`);
    console.log(`Titre : ${livreTrouve.titre}`);
    console.log(`Auteur : ${livreTrouve.auteur}`);
    console.log(`Année : ${livreTrouve.annéedepublication}`);
    console.log(`Disponible : ${livreTrouve.disponible ? "Oui" : "Non"}`);
  } else {
    console.log(" Aucun livre trouvé avec cet ID.");
  }

}
rechercherLivreParID(2);



function ajouterabonnes (){
    
     const nom = prompt("entrer le nom  d'abonnes");
     const prenom = prompt ("entrer le prenom d'abonnes");
     const email = prompt("entrer email d'abonnes");
     const id = Abonnes.length+1
     Abonnes.push ( id,nom,prenom,email);
     console.log("ajouter abonnes")
}
 ajouterabonnes();