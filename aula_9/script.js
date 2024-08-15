// funções  


// função regular 
function calcula(numero){ 
    return numero *2

} 


console.log(calcula(5)) 


// função anônima  

let multiplicacao = function(multiplicador, multiplicante){ 
    return multiplicador * multiplicante
    
} 


console.log(multiplicacao(5,2)) 


// arrow function
let divide = (dividendo, divisor) => {
    return dividendo /divisor 
} 

console.log(divide(4,2))