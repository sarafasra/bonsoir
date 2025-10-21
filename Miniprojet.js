const prompt = require("prompt-sync")(); 
const taches = []; 
let comid = 1;     

function ajoutertache() {
    const titre = prompt("Entrer un titre : ");

    const tache = {
        id: comid++,        
        titre: titre,      
        isDone : false
    };

    taches.push(tache); 

  
    console.log(`ajouter tache [${tache.id}]  ${tache.titre}`);
}


ajoutertache();

function recherchertache(){
    let titre = prompt("entrer une tache ");
    for (let key in taches){
        
     if (taches [key].titre==titre){
        console.log (`tache trouver : [${taches[key].id}] ${taches[key].titre}`)
     }
    }
}
recherchertache();


function modifiertache(id, nouvelletitre) {
  const tache = taches.find(n => n.id === id);

  if (!tache) {
    console.log(" La tâche recherchée n'existe pas.");
  } else {
    tache.titre = nouvelletitre;
    console.log(`Tâche modifiée : [${tache.id}] ${tache.titre}`);
  }
}
modifiertache();

function supprimertache(){
const id = parseInt(prompt("Entrez id de la tâche  supprimer : "));
for (let i = 0; i < taches.length; i++){
    if (taches[i].id === id){
        console.log(` Tache avec id ${id} supprimée.`);
    }else{
         console.log("  tâche n'est pas avec  id.");
    }
}
}

supprimertache();

function Affichertachesterminées(){

    for(let i = 0; i < taches.length; i++){
        if(taches[i].isDone == true){
            console.log("terminer");
        }else{
            console.log ("en attente ");
        }
    }
}
Affichertachesterminées();
function affichermenu (){
    let choix ;
    do  {
  console.log("=== To-Do List === ");
  console.log("1 Ajouter une tache");
  console.log("2 Afficher une tache");
  console.log("3 Rechercher une tache");
  console.log("4 Modifier une tache");
  console.log("5 Supprimer une tache");
  console.log("6 Marquer une tache comme terminée");
  console.log("7 Afficher taches terminées / en attente");
  console.log("8 Quitter");
  const choix = prompt(" Choisir une option ");
  switch (choix) {
      case "1": 
      ajoutertache();
      break;
      case "2":
        affichertache();
        break;
      case "3" :
        recherchertache();
        break;
      case "4" :
        modifiertache();
        break;
      case "5" :
        supprimertache();
        break;
     case "6" :
       Marquerterminée();
       break;
     case "7" :
        Affichertachesterminées();
        break;
     case "8" :
          console.log("Quitter");
     break;
     default:
        console.log ("choix invalide")
  }}
  while (choix!=="7")
  

}
affichermenu();