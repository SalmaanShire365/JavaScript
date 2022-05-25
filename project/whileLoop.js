let output = '';
let i = 1;
const outputCharacterLimit = 100;
while (output.length < outputCharacterLimit) {
    output += i + ', ';
    i *= 10;
}
console.log(output);
console.log(`Length ${output.length}`);