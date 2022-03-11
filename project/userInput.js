// JavaScript source code

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Tell me your favorite color: ', (answer) => {
    const isFavoriteColorBlue = answer == 'blue';
    console.log(`Your favorite color is blue: ${isFavoriteColorBlue}`);

    rl.close();
});
