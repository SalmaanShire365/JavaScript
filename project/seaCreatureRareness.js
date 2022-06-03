/*
suppose we have an object that maps an sea creature's name to how rare it is
(on a scale of 1 to 10, 1 being common, 10 being very rare)
 */
const nameToRareness = {
    'whale': 0,
    'jellyfish': 5,
    'starfish': 6,
    'minnow': 2,
};



// if we want to see how rare a whale is, we can just lookup the whale by name
// and get it's rarity value

const creature = 'octopus';
if (creature in nameToRareness) {
    console.log(`This ${creature} is this rare: ${nameToRareness[creature]}`);
}
else {
    console.log(`This ${creature} could not be found in our database`);
}


// suppose we want to figure out all the creatures that we have rarity info
// about. we can definitely do this
console.log(Object.values(nameToRareness));
console.log(Object.keys(nameToRareness));


// suppose minnows become endangered, and their rarity goes up to a 10, we can
// overwite the value being stored at a specific key
console.log(nameToRareness);
nameToRareness[`minnows`] = 10;
console.log(nameToRareness);


// you can also delete key value pair
delete nameToRareness[`starfish`];
console.log(nameToRareness);
