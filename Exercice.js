const prompt = require("prompt-sync")();
/*let nom = prompt("entrer un nom");
let prenom = prompt("entrer un prenom");
let sexe = prompt("entrer un sexe");
console.log (nom,prenom,sexe);*/

/*let a=parseInt(prompt("entrer le premiere nombre"));
let b=parseInt(prompt("entrer le deuxieme nombre"));
let somme = a + b;
console.log(somme);*/

/*let a = 2
let b = 3 
let c = 4
a = b
b = c
c = a
console.log ("a" +a,"b" +b,"c" +c);*/


let nombre1 = parseFloat(prompt("entrer le nombre1"));
let nombre2 = parseFloat(prompt("entrer le nombre 2"));
let nombre3 = parseFloat(prompt("entrer le nombre 3"));
let nombre4 = parseFloat(prompt("entrer le nombre 4"));
let somme = (nombre1+nombre2+nombre3+nombre4);
let moyenne = somme/4;
console.log (moyenne);
