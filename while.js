const prompt  = require('prompt-sync')();

let soma = 0;
let numero = 
Number(prompt("Digite um número  ( negativo para sair)"));

while( numero >= 0){

    soma += numero;
    numero = 
    Number(prompt("Digite outro número  ( negativo para sair)"));
}
console.log("A soma dos valores digitados: " + soma);
