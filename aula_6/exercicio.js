const prompt = require("prompt-sync")();

let choice = prompt('Insira a sua bebida: ') 
choice = choice.toUpperCase()

switch(choice){  

    case 'CAFÉ':
        valor = 20;
        console.log(`O ${choice.toLowerCase()} custa: ${valor.toFixed(2)}`);
    break 

    case 'CHÁ':  
        valor = 5;
        console.log(`O ${choice.toLowerCase()} custa ${valor.toFixed(2)}`);
    break 

    case 'LEITE':
        valor = 7
        console.log(`O ${choice.toLowerCase()} custa ${valor.toFixed(2)}`);
    break 
    
    default:
        console.log('Por favor, escolha entre café, leite ou chá.');
    }

