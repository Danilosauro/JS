// if simples

let idade = 22; 

if (idade < 16){ 
    console.log(`A sua idade é ${idade}, menor que 16 anos, e por isso você não vota`) 
} else { 
    console.log(`A sua idade é ${idade}, maior ou igual a 16, e por isso você vota.`)
}; 


// case 

let diasem = 8 

switch(diasem){ 
    case 1:
        console.log('Domingo')
        break; 
    case 2:
        console.log('Segunda-Feira')
        break; 
        
    default:
        console.log('Dia da Semana inexistente.')
    
} 


let drinks = ['Café','Leite','Chá'] 

choice = prompt('Insira a sua bebida: ')