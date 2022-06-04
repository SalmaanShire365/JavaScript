/*
 there is an object called squid lard, representing the Lord of the squids, and I want
 you to tell me all about her
 */

const squidLord = {
	doSquidThings: function () {
		console.log(`${this.name} goes BLOOP BLOOP`);
	},
	howManyArms: 100,
	isDangerous: true,
	level: 1000,
	name: 'squid lord',
	sex: 'female',


};

// 1.
// console.log(squidLord);

// 2.
// const squidLordKeys = Object.keys(squidLord);
//for (let i = 0; i < squidLordKeys.length; i++) {
	// const key = squidLordKeys[i];
	// console.log(`key: ${key}, value: ${squidLord[key]}`);
// }
// console.log();

// 3

// for (let key in squidLord) {
//	if (key === 'isDangerous') {
//		console.log(`${key}: ${squidLord[key]}`);
//	}
	
// }


squidLord.doSquidThings();
