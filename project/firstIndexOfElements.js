// let's write a program that finds the index of an element if it's in the array
// if element is NOT in array, let's say the index is -1 
// ['a','b','c','d','e'], Looking for 'a' gives us 0 
// Looking for 'd' gives us 3 
// Looking for 'f' gives us -1
// assume you only have to find the first occurence of the element 

let fish = ['swordfish', 'whale', 'octupus', 'shark', 'squid', 'starfish'];


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Give me the name of the fish you see:', (answer) => {
    console.log(`BEEP BOOP...SEARCHING FOR ${answer.toUpperCase()}..BEEP BOOP`);

    answer = answer.toLowerCase();
    let matchIndex = -1;
    for(let i = 0; i<fish.length; i++){
    if (fish[i] === answer) {
        matchIndex = i;
        break;
        }
        
}
    // inform user about our findings 

    if (matchIndex === -1) {
        console.log(`Unfortunately we could not find ${answer} in our database`);
    }
    else {
        console.log(`Found your fish at index ${matchIndex} in our database`);

    }
    rl.close();
});