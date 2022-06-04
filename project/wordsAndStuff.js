/*
 
 1. create the data structure with 5 different nouns (which means 10 adjectives total)

2. print out whether water is in your object (as a key)

3. delete your least favorite key 

4. out of all the keys left over the object, delete the 2nd key

5. print out all the adjectives in the object

6. overwrite the adjectives stored in the ANY of the existing keys
*/

// 1
const nounsToAdjectives = {
    fire: ['hot', 'pain',],
    ice: ['cold', 'slippery',],
    water: ['wet', 'fun',],
    air: ['windy', 'fragrant',],
    rocks: ['hard', 'sharp',],
};

console.log('1', nounsToAdjectives, '\n');

// 2

console.log(`2 Object knows about water: ${'water' in nounsToAdjectives}`, '\n');


// 3

delete nounsToAdjectives.rocks;
console.log('3', nounsToAdjectives, '\n');


// 4. 
delete nounsToAdjectives.ice;
console.log('4', nounsToAdjectives, '\n');

// 5.
console.log('5', Object.keys(nounsToAdjectives, '\n'));

// 6.
nounsToAdjectives['fire'] = ['searing','burnt','corroded'];
nounsToAdjectives['water'] = ['dripping','tasty','healthy'];
nounsToAdjectives['air'] = ['dense','plentiful','heavy'];
console.log('6', nounsToAdjectives, '\n');
