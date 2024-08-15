//filter 

let vendas = [  
{nome: 'Marcos', produto: 'compota de jambo', valor: 20 }, 
{nome: 'João', produto: 'conserva de pimenta', valor: 15}, 
{nome: 'Larissa', produto: 'salada de fruta', valor: 5 },

]; 


let listagem_nomes = vendas.filter( 
    function(value){ 
        console.log(value.nome);
    }
) 

let listagem_valores = vendas.filter( 
    function(value){ 
        console.log(value.valor >= 10);
    }
); 


// map  

let mapping_values = vendas.map( 
    function(value){ 
        return value.valor += value.valor/10 *(100);
    }
);  

console.log(mapping_values); 


counter = 0 
nova_lista_valores = []

for (item in vendas){ 
    nova_lista_valores.push(vendas[counter].valor) 
    counter+=1
}; 

console.log(nova_lista_valores); 

// reduce 

let reductor = nova_lista_valores.reduce( 
    function(total, numero){
        return total + numero;

    },0
); 

console.log(reductor);



// ForEach 

nova_lista_valores.forEach(number => console.log(number * 2));  


let foods = ['feijao','arroz','macarrao'] 

foods.forEach(food => console.log(food))


