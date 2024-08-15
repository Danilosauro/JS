// manipulação de arrays 


//slice
let minha_lista = [1,2,3,4];

nova_lista = minha_lista.slice(0,3); 

console.log(nova_lista); 
console.log(minha_lista); 

//concat 

let mais_um_array = [1,2,3]; 
let mais_outro_array = [4,5,6]; 

let array_mais_novo = mais_um_array.concat(mais_outro_array); 
console.log(array_mais_novo); 

//filter  

evens = mais_um_array.filter(item => item %2 ==0);
console.log(evens)


