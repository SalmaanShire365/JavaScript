// JavaScript source code

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Give me a number: ', (answer) => {
    const numberAnswer = +answer;

    /*if (typeof (numberAnswer) === 'number') {
        console.log(`WOW, ${numberAnswer} is a great number`);
    }
    else {
        console.log(`I'm sorry, but ${answer} is not a number`);
    }*/
    if (isNaN(numberAnswer)) {
        console.log(`I'm sorry, but ${answer} is not a number`);
    }
    else {
        console.log(`WOW, ${answer} is a fantastic number!!!`);
    }


    rl.close();
});
