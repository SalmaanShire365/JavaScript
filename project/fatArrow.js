function theyLoveEachOther(personA, personB) {
	console.log(`${personA} and ${personB} are in love`);

}
// theyLoveEachOther('Joe', 'John');

// this function can also be written using a fat arrow
const theyLoveEachOtherFatArrow = (personA, personB, personC) => {
	console.log(`${personA} and ${personB} as well as ${personC} are in love`);
};
theyLoveEachOtherFatArrow(`Bernice`, `Sammy`,`Bob`);

const printOutTheThing = (thing) => {
	console.log(thing);
};
printOutTheThing(`giraffe`);

const return2 = () => 2;
console.log(return2());


