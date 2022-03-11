// JavaScript source code

/*
 1.
 the user is going to give you a string, and each user starts out with 0
 if the string the user gave us starts with a ?, then we'll do some more tests to see how many points they'll win (based on other things in their string). however, if the user's input DOES NOT start with a ?, then they lose instantly
 2.
 SO, suppose the user hasn't lost the game yet. if that's the case, we're going to test the second character they gave you. if the second character is an !, give the user 2 points. otherwise, if the second character is a %, give the user 3 points, the user just get's 1 point

3.
now, if the user gave a % in part 2 (above), award the user a point for each character in their entire string

4.
once finished, even if the user got no points, print out how many points they have earned when the game is over


 */

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
rl.question("Please give me a string: ", (answer) => {
    // start the user for 0 points 
    let points = 0;

    if (answer[0] === '?') {
        console.log('started with a ?');
    }

    console.log('part 4 stuff');
    rl.close();

});



