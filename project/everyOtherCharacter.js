
const input = 'elephant giraffe pony seabass anaconda china lettuce hamburger french';

let output = '';

let characterIndex = 0;

while (output.length < 15) {
    output += input[characterIndex];

    characterIndex += 3;
    console.log(output);
}
console.log(`Final string: ${output}`);