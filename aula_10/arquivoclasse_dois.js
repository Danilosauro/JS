class electronic_device{ 
    
    constructor(name){
        this.name = name; 
        this.on = true; 
    }

    tur_on(){ 
        if(this.on == false){
            console.log(`setting ${this.name} up.`); 
            this.on = true; 
            console.log(`The ${this.name} is on.`)
        } else{ 
            console.log(`the ${this.name} is already on.`)
        }
    } 
} 


class smartphone extends electronic_device{
    constructor(name, color, model){ 
        super(name);
        this.color = color; 
        this.model = model; 
    }


}

let device_one = new smartphone('dell', 'black', 'inspironA15') 

console.log(device_one);
device_one.tur_on();
