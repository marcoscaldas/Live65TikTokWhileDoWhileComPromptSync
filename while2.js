const prompt  = require('prompt-sync')();

let tabuada = 
prompt("Digite a tabuada ou SAIR para encerrar")

while(tabuada.toUpperCase()  !=="SAIR"){

    let numero = Number(tabuada);   

    if(!isNaN(numero)){

        console.log(`Tabuada do ${numero}`)

        for(let i = 1; i<=5; i++){
            console.log(`${numero} x ${i} = ${ numero * i}`)
        }
        
    }else{
        console.log("insira um número válido! ");
    }

    tabuada = 
    prompt("Digite a tabuada ou SAIR para encerrar")

}


