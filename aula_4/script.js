let valores = [5,5,5,5,5]; 

console.log(valores[0]); 
console.log(valores[2]); 


for (let i = 0; i < valores.length; i++){ 
    console.log("Posicao:" + i + " Valor: " + valores[i]);
} 

let carros = []; 

carros[0] = 'Volvo'; 
carros[1] = 'Jeep';  

console.log(carros);

let motos = new Array("Yamaha", "BMW", "Honda"); 
console.log(motos);


// calcular a média da lista  

valor = 0

for (let i =0; i < valores.length; i++){ 
    valor += valores[i];  
}

media = valor / valores.length;
console.log(media);

media = 0
for (item in valores){
    media += valores[item]
}  

console.log(media = media / valores.length);
