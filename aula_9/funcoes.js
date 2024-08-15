let shopping_cart = [] 

function add_item_to_cart(item, shopping_cart){
   shopping_cart.push(item)
   return shopping_cart
} 



function remove_item_to_cart(item, shopping_cart){
    let index = shopping_cart.indexOf(item)
    if (index !== -1){ 
        shopping_cart.splice(index, 1)
    } else{ 
        console.log('item não não encontrado')
    }
    return shopping_cart
}


function viewing_items_of_cart(shopping_cart){
    if (shopping_cart.length != 0){
        for (item of shopping_cart){
            console.log(item, 'is in your shopping cart.')
        }

    } else{ 
        console.log('your shopping cart is empty.')
    } 
} 

function clear_cart(shopping_cart){
    shopping_cart.length = 0 
    console.log('your cart is clear.') 
    return shopping_cart
}


add_item_to_cart('hat', shopping_cart) 
add_item_to_cart('pants', shopping_cart)

console.log(shopping_cart)


remove_item_to_cart('hat', shopping_cart)
console.log(shopping_cart) 

viewing_items_of_cart(shopping_cart) 

clear_cart(shopping_cart)