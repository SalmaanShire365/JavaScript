
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Do you know how to use userinput?: ', (answer) => {
    // TODO: Log the answer in a database
    const isAnswer = answer === 'yes';
    console.log(`Come on, of course that's ${isAnswer}.`);

    rl.close();
});
