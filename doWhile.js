const prompt  = require('prompt-sync')();
let usuario, senha;

do{
    usuario = prompt("Digite o nome do usuário: ");
    senha = prompt("Digite sua senha: ");
    
}while( usuario !== "admin" || senha !== "1234");

console.log("Login realizado com sucesso!!!!!");