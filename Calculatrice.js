const prompt = require("prompt-sync")();
function addition (nombre1,nombre2){
       let addi = (nombre1+nombre2);
       return addi;
}
  function Soustraction (nombre1,nombre2){
    let sous = (nombre1-nombre2);
    return sous;
  }

  function Multiplication (nombre1,nombre2){
    let multipli = (nombre1*nombre2);
    return multipli;
  }
  function division (nombre1,nombre2){
    let divi = (nombre1/nombre2);
    return divi
  }
  function Puissance (nombre1,nombre2){
    let puiss = (nombre1**nombre2);
    return puiss
  }
  function Racinecarrée (nombre1,nombre2){
    let raci = Math.sqrt(nombre1,nombre2);
    return raci
  }
  function Factorielle  (nombre1,nombre2){
       let fact = (nombre1*nombre2);
       return fact
  
  }



function calculatrice(){
  while(true){
    console.log ("--calculatrice--");
    console.log ("1.Addition (+)");
    console.log ("2.Soustraction (-)");
    console.log ("3.Multiplication  (*)");
    console.log ("4.division (/)");
    console.log ("5.Puissance");
    console.log ("6.Racinecarrée ");
    console.log ("7.Factorielle ");
    console.log ("8.L'historique");
     console.log ("9.quitter le programme");

     let operation=prompt("choisissez une operation (1-9):");
     let nombre1,nombre2,res;
     if (operation>="1" && operation<=5){
        
   nombre1 = Number (prompt("entrer un nombre1:"));
   nombre2 = Number (prompt("entrer nombre2:"));
     }
     else if (operation === "6" || operation===7){
        nombre1=prompt("entrer le nombre1:");
     }
  }



    


let res ;
let historique= [];

switch (operation) {
        case 1:
            res = addition(nombre1, nombre2);
            historique.push (res)
            break;
        case 2:
            res = Soustraction(nombre1, nombre2);
            historique.push (res)
            break;
        case 3:
            res = Multiplication(nombre1, nombre2);
            historique.push (res)
            break;
        case 4:
            res = division(nombre1, nombre2);
            historique.push (res)
            break;
        case  5:
            res = Puissance (nombre1,nombre2);
            historique.push (res)
            break;
        case 6:
            res = Racinecarrée (nombre1,nombre2);
            historique.push (res)
            break;
        case 7:
            res = Factorielle (nombre1,nombre2);
            historique.push (res)
            break;
        default:
            res = ("operation non reconnue");
        case 8:
            console.log ("historique des calcules:")
            if (historique.length===0){
                console.log ("Aucun calcul effectué");
            }else {
                historique.forEach(historique => console.log (historique));
            }
}
console.log ("res: ", res);
historique.push (`loperation "${operatio}": ${nombre} ${nombre2}`)
}
   calculatrice();

  


    
     

  

  











/*let res ;
if (operation===Addition){
   res = nombre1+nombre2;
}else if  (operation===Soustraction) {
    res = nombre1-nombre2;
} else if (operation===Multiplication){
    res = nombre1*nombre2;
}else if (operation===Division){
     res = nombre1/nombre2 ;
}else if (operation===Puissance){
    res = nombre1**nombre2;
}else if (operation===Racinecarrée){
      res = Math.sqrt(nombre1,nombre2);
}else if (operation===Factorielle){
    res = nombre1*nombre2;
}else if (operation===division){
    if (nombre2===0){
        alert ("erreur : division par zéro impossible");

} else {
        res = nombre1/nombre2;}
}else {
    alert("erreur operation invalide");
}*/





