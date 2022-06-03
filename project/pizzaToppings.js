// suppose we're back at our pizza store, and we need to be able to put
// different toppings on our pizas


// put pepporoni on pizza 
function addPepperoni(pizzaString) {
    return pizzaString + ' pepperoni';
}

// console.log(addPepperoni(`regular pizza`));

// put extra cheese on pizza
function addExtraCheese (pizzaString) {
    return pizzaString + ' 2x cheese ';
}
// console.log(addExtraCheese(`large pizza`));

// make base pizza before toppings
function makePizzaWithSize (size) {

    return `${size} pizza`;
   
}
// console.log(makePizzaWithSize('small'));

// make pizza with size and topping
function makePizza(sizeString, toppingFunction) {
    // make pizza with size (no toppings yet)
    let pizza = makePizzaWithSize(sizeString);

    // add a topping based on the topping string 
    pizza = toppingFunction(pizza);

    return pizza;
}

console.log(makePizza(`x-large`, addExtraCheese));