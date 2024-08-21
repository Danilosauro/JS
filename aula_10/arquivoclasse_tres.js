class funcionario{ 
    
    constructor(nome, idade, cargo){
        this.nome = nome;  
        this.idade = idade; 
        this.cargo = cargo;

        this.trabalho = true; 
    } 

    se_apresentar(){ 
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} e sou ${this.cargo}`)
    }

    trabalhar(){ 
        if(this.trabalho){
            console.log(`${this.nome} trabalha no cargo de ${this.cargo}.`); 
        } else{ 
            console.log(`${this.name} não trabalha.`)
        }
    } 
} 


let pessoa_zero = new funcionario('João', '22', 'estagiário') 
pessoa_zero.se_apresentar() 
pessoa_zero.trabalhar()


class gerente extends funcionario{
    constructor(nome, idade, cargo, departamento){ 
        super(nome, idade, cargo); 
        
        this.departamento = departamento; 
    } 

    gerenciar(){ 
        if(this.cargo.toLowerCase() == 'gerente'){
            console.log(`${this.nome} irá gerenciar.`);
        }
    }
} 



let pessoa_um = new gerente('Marcos', '35', 'gerente', 'gerencia');
pessoa_um.gerenciar(); 
pessoa_um.se_apresentar(); 



class desenvolvedor extends funcionario{
    constructor(nome, idade, cargo, linguagem){ 
        super(nome, idade, cargo); 
        
        this.linguagem = linguagem;
    } 

    programar(){ 
        if(this.cargo.toLowerCase() == 'desenvolvedor' || this.cargo.toLowerCase() == 'desenvolvedora'){
            console.log(`${this.nome} programa em ${this.linguagem}.`);
        }
    }
}


let pessoa_dois = new desenvolvedor('Débora', '49', 'desenvolvedora', 'python')
pessoa_dois.programar()

