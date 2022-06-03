// 1. take the following string and split into an array
const tastyString = 'dragon - panther - whale - giant squid - take-out - cat dog';
// convert this into the following 
// [dragon, panther, whale, giant squid, take-out, cat dog]

const arr1 = tastyString.split(" - ");
console.log(arr1);
console.log("-----------------");


// 2. given the array from part 1 that you created, join the elements back 
// together into a string like this: 
// dragon, panther, whale, giant squid, take-out, cat dog
const p2 = arr1.join();
console.log(p2);
console.log("---------------");
// 3. using a bit of brain power, can you think of a way to, if given a string,
// quick reverse the string?

const anyString = 'this is any string';
const reversed = anyString.split('').reverse().join();
console.log(reversed);

