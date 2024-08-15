lista = [1,2,3,4,5];

console.log(lista.reverse()); 

console.log(lista.join('|')); 


retirado = lista.shift(); 
console.log(retirado); 

console.log(lista);  

retirado_ultimo = lista.pop();
console.log(retirado_ultimo); 

console.log(lista); 

console.log(lista.indexOf(3));

lista.push(7);

console.log(lista); 


// Exercício negativos 


lista_negativa = [-10,-1,-8,40] 

for (item in lista_negativa){ 
    lista_negativa[item] = Math.abs(lista_negativa[item])
} 

console.log(lista_negativa)
