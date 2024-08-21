class pessoa{ 
    
    //construtor 
    constructor(name, lastname){
        this.name = name; 
        this.lastname = lastname;
    } 

    //método 
    speak(){ 
        console.log(`Olá ${this.name} ${this.lastname}`);
    } 

    get first_name(){ 
        console.log(this.name)
    }
} 

// instanciação
pessoa_um = new pessoa('João', 'Silva')  

//chamado
pessoa_um.speak(); 
pessoa_um.first_name;