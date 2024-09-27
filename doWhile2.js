const prompt  = require('prompt-sync')();
var num

do{
    num = Number(prompt("Número"));

    if(num == 0 || isNaN(num)){

    console.log("Digite um número válido...");
    }

}while(num == 0 || isNaN(num) )
    var pares = `Pare entre 1 e ${num} --` 

for(var i = 2; i < num; i = i +2 ){

    pares = pares + i  + " ---- "
}
console.log(pares);