const arr = [17, false, 'some string about something else'];
console.log(arr);
console.log(`Length: ${arr.length}`);
console.log('-----------------');



arr[1] = 'batman';
console.log(arr);
console.log(`Length: ${arr.length}`);
console.log('-----------------');

// add an element to array front 
arr.push(14 - 2);
console.log(arr);
console.log(`Length: ${arr.length}`);
console.log('-----------------');

// or back 

arr.unshift('zach');
console.log(arr);
console.log(`Length: ${arr.length}`);
console.log('-----------------');


// elements can be removed
// back
const lastElement = arr.pop();
console.log(arr, `Removed ${lastElement}`);

const oldFirstElement = arr.shift();
console.log(arr, `Old first element: ${oldFirstElement}`);