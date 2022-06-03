// write program that describes some type of magical bear beast, and your bear
// should haev 5 types (key value pair), where you have 1 value of each of the following type
/*
 number {age: 74}
 string {name: 'steven'}
 boolean {}
 array
 function 
 */

const doBearSound = name => {
	console.log(`${name} goes "uhh"`);
};

const color = 'black';


const bearBeast = {
	weight: '1500kg',
	numberOfTeeth: 100,
	name: 'bear-o',
	color: color,
	isDangerous: true,
	dinner: ['fish', 'a couple peasants', 'pizza'],
	doBearSound,

};

console.log(bearBeast);
bearBeast.doBearSound(bearBeast.name);

const bearBeast2 = [
	['fish', 'a couple peasants', 'pizza'],
	color,
	doBearSound,
	true,
	'bear-o',
	100,
	'1000kg',
];
console.log(bearBeast2);
console.log(`The color of this bear was ${bearBeast2[0]}`);