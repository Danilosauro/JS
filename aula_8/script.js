let quote = "To boldly go where no man has gone before.";
let star = "trek" 

let word = "boldly";

inc = quote.includes(word); 
if (inc == true){ 
    position = quote.indexOf(word) 
    console.log(position)
    console.log(quote.substring(position, word.length + position).toUpperCase() + " " +star.toUpperCase());
}