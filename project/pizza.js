/*
suppose we work at a restaraunt and we have an array of items that represents a tray of food. 
we need to check if the tray of food has pizza in it
 */


// some code that checks whether or not a tray of food has pizza in it 

function hasPizza(foodTray) {
	console.log(foodTray);
	return foodTray.indexOf('pizza') !== -1;
}


// create a food tray 
const foodTray = ['pizza', 'swordfish', 'candy canes', 'soda'];
console.log(`Food tray has pizza: ${hasPizza(foodTray)}`);




const diffFoodTray = [`soda`, 'chocolate'];
console.log(`Food tray has pizza: ${hasPizza(diffFoodTray)}`);
