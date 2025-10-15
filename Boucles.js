const prompt = require("prompt-sync")();

let nombre = parseInt(prompt("entrer un nombre"));

console.log ("table de multiplication de "+nombre)

for (let i=1 ;i<=10;i++){

    console.log("nombre" +  "*" +i + "=" + (nombre*i));
}




