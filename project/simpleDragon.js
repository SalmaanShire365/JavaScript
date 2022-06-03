
const dragon = { name: 'felix', size: 'really big', age: 1000 };
// print objects



// access specific properties
/*console.log(`This is how big ${dragon.name} is: ${dragon.size}`);
*/
// reset properties
dragon.age += 1;
/*console.log(`This is how old ${dragon.name} is: ${dragon.age}`);
*/
// create new properties
dragon.favoriteCreamFlavor = 'vanilla';
console.log(dragon[`favoriteCreamFlavor`]);


const differentDragon = { 'name': 'jeff', 'age': 42 };
differentDragon[`favorite restaurant`] = "mcdonald's"
console.log(differentDragon);
