class Animal {
	constructor(name, weight, fullnessOutOf10) {
		this.name = name;
		this.weight = weight;
		this.howFast = null;

		//hunger us given to us based on number out of 10
		this.hunger = 'starving';
		if (0 < fullnessOutOf10 && fullnessOutOf10 <= 3) {
			this.hungry = 'hungry';
		}
		else if (3 < fullnessOutOf10 && fullnessOutOf10 <= 6) {
			this.hunger = 'not hungry'
		}
		else if (6 < fullnessOutOf10) {
			this.hunger = 'full';
		}
	}
}


/* 
 

(6,infinity]
 full

(3,6]
 not hungry 


 hungry


(0,3]
starving

*/





// all giant rabbit weigh 1500lbs, are half-full to start (5/10 fullness), 
// are very fast 
class GiantRabbit extends Animal {
	constructor(name) {
		super(name, '1500lbs', 5);
		this.howFast = 'very fast';
	}
}



// tiny tortoises weigh 20lbs, are full to start. and they're exten
class TinyTortoise extends Animal {
	constructor(name) {
		super(name, '25lbs', 10);
		this.howFast = 'extremely slow';
	}
}

const babyGiantRabbit = new GiantRabbit('fluffy');
console.log(babyGiantRabbit);
const daddyTinyTortoise = new TinyTortoise('scruffy');
console.log(daddyTinyTortoise);