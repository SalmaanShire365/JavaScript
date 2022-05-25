let characters = 'ab';

for (let i = 0; i < characters.length; i++) {
    let currChar = characters[i];

    console.log(`${currChar} ===`);

    for (let j = 0; j < 3; j++) {
        console.log(`${currChar} ${j}`);
    }

    console.log('----------------');

}