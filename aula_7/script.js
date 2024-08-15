// loops 

meu_array = ['bom','dia','brasil']

for (let i = 0; i< meu_array.length; i++){ 
    console.log(meu_array[i])
} 

for (item in meu_array){ 
    console.log(meu_array[item])
} 

for (item of meu_array){ 
    console.log(item)
} 


const carro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in carro) {
  
    console.log(caracteristica + ': ' + carro[caracteristica]);
  
  }