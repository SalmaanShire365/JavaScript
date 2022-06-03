/* suppose we have a player in a game,
 and their inventory is stored in a string. 
 their inventory will look something like this *gold coin | puppy | magic sword." 
our job is to measure up how much their inventory is worth if they were to give
 their bag (inventory) to somebody and sell all of the items in it


our job is to get the value of their entire inventory. here are the values of the items in the world:
	- gold cup , 5 
	- puppy, 5 
	- magic sword,  10
	- tooth of a majestic whale, 20
	- tentacle of the giant squid, 100
	- anything else, 1
*/



function getInventoryValue(inventoryString) {
	const inventory = inventoryString.split(' | ');
	console.log(inventory);

	let sum = 0;

	// iterate over each item

	for (let i = 0; i < inventory.length; i++) {
		const item = inventory[i];

		if (item === 'gold cup') sum += 5;
		else if (item === 'puppy') sum += 4;
		else if (item === 'magic sword') sum += 10;
		else if (item === 'tooth of a majestic whale') sum += 20;
		else if (item === 'tentacle of the giant squid') sum += 100;
		else sum += 1;
	}

	console.log(`Value of inventory ${sum} coins`);
	return sum;
}
// test inventory value

getInventoryValue('gold cup | tentacle of the giant squid | magic sword | japanese language textbook | tooth of majestic whale');
