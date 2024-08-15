let meu_obj = { 
    'nome': 'Edson', 
    'sobrenome': 'Arantes',
}

console.log(meu_obj.nome +' '+ meu_obj.sobrenome); 
console.log(meu_obj['nome'] +' '+meu_obj['sobrenome']);



let novo_obj = new Object(); 

novo_obj.nome  = 'Edson';
novo_obj.sobrenome = 'Arantes';  


console.log(novo_obj); 



function create_person(nome, sobrenome){ 
    objeto = new Object(); 
    objeto.nome = nome; 
    objeto.sobrenome = sobrenome;

    return objeto;
} 

let mais_novo_objeto = create_person('Ronaldo', 'Nazário') 
console.log(mais_novo_objeto)



function criar_obj(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        get crianomecompleto() {
            return this.nome + " " + this.sobrenome;
        }
    };
}


