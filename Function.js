
const prompt = require("prompt-sync")();
/*function maxTableau(tab){
    let max = tab [0]
    for (let i = 1 ; i<tab.length ; i++){
        if (tab [i] > max){
            max = tab [i]
        return max ;}}

}
let montab = [3,7,9,4];
let maximun = maxTableau(montab);
console.log ("le maximun est " +maximun);
*/



/*function sommeTableau(tab){
    let somme = 0
    for (let i = 0 ; i < tab.length ; i++){
        somme = somme+tab[i]
    }
    return somme;
};
let tabl = [4,9,5,2];
let somme = sommeTableau(tabl)
console.log ("la somme est " +somme);*/




/*function  moyenne(tab){
    let somme = 0
    let moyenne = 0
    for (i = 0; i < tab.length ; i++){
         somme = somme + tab.length
    }  
     moyenne = somme / tab.length;
    return moyenne;

}
let table = [30,8,95,4];
let moyene= moyenne(table);
console.log ("la moyenne est " + moyene);*/



/*function produitTableau(tab) {
    let produit = 1;
    for (i = 1; i <tab.length; i++){
      produit = produit*tab[i]
   
    }
    return produit;
   
}
let tabl = [9,76,5,30];
let pro = produitTableau(tabl);
console.log ("le produit est " +pro)*/



/*function  filtrerPairs(tab) {
    tab.filter((nombre) => {
   return nombre % 2 === 0;
});

}
let tableau = [12,4,9,7];
let nomp =  filtrerPairs(tableau);
console.log ("le nombre pairs est "+nomp);*/




/*function tableMultiplication(n) {
    nouveautable = [];
    for (let i=1 ;i <n;i++){
        nouveautable.push =(n*i)
    }
    return nouveautable;
}
console.log(tableMultiplication(6));*/



function doubler(tab) {
    let table = [];
    for(let i=1 ; i< tab.length ;i++){
        table.push(tab[i] * 2);
    }
    return table;
}

let nvtable = [2,4,7,8];
let nvtable2 = doubler(nvtable);
console.log(nvtable2);