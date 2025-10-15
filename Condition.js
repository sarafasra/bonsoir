const prompt = require("prompt-sync")();
/*let nombre = parseInt(prompt("entrer un nombre"));
if (nombre% 2== 0){
    console.log ("le nombre est paire");}
    else {
        console.log ("le nombre est impaire");
    };*/




    /*let S = parseFloat(prompt("entrer le nombre"));
    if (S>0) {
        console.log ("le nombre est positive")
    }
    else if (S<0) {
        console.log ("le nombre est negative")
    }
    else {
        console.log ("le nombre est null")
    }*/





    /*let age = parseFloat (prompt("entrer age"));
    if (age >= 18){
        console.log ("Éligibldeux e au vote" )
    }
    else {
        console.log ("Non éligible" )
    }*/





   /*let nombre1 = parseFloat(prompt("entrer un nombre1"));
 
   let nombre2 = parseFloat(prompt("entrer un nombre2"));
    if ( nombre1 > nombre2){
        console.log ("le nombre plus grand est +nombre1")
    }
    else {
        console.log ("le nombre plus grand est +nombre2")
    }*/






   /*let score = 50;

   switch(score){
    case(score > 90 && score < 100):
        console.log ("A")
    break;
    case (score>=80 && score<= 89):
        console.log ("B")
    break;
       case (score>=70 && score<= 79):
       console.log ("C")
    break;
    case (score>=60 && score<= 69):
       console.log ("D")
    break;
      case (score<60):
       console.log ("F")
    break;
    default:
    console.log ("erreur");
   }*/
   




    /*let annee = parseInt (prompt("entrer un nombre"));
    if (annee%4===0){
        console.log("annee est bissextile")
    }else if (annee%100  !=0 && annee%400==0){
        console.log("annee est bissextile")
    }
else{
    console.log("annee non bissextile")
}*/



/*let couleur = String(prompt("entrer un couleur"));
if(couleur=="rouge"){
    console.log("Arrêt" );
}
else if (couleur=="jaune"){
    console.log("Préparez-vous" );
}
else if (couleur=="vert"){
    console.log("Allez");
}
else {
    console.log("erreur");
}*/



/*let nombre = parseInt(prompt("entrer un nombre"));
if (nombre%3==0){
    console.log ("Fizz")
}
else if (nombre%5 ==0){
    console.log ("Buzz")
}
else if (nombre%3==0 && nombre%5 ==0){
    console.log ( "FizzBuzz" )
}
else {
    console.log (nombre)
}*/




let nomutilisateur = "Admin"
let motdepasse = "1234"
let nomuti = String(prompt("entrer un  nom"));
let mots = parseFloat(prompt("entrer  un mot de passe"));
if ( nomutilisateur==nomuti &&  motdepasse==mots){
    console.log("Bienvenue Admin" );
}
else if (nomutilisateur==nomuti && motdepasse != mots){
    console.log ("Mot de passe incorrect" );
}
else {
    console.log ("Utilisateur introuvable" );
}
