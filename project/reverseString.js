// write a function that, when given a string, will return a copy of that string 
// reversed

function reverseString(string) {
	return string.split('').reverse().join('');
}

console.log(reverseString("This is a string that is reversed"));