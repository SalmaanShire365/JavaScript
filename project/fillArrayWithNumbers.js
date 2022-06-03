// create an array with the numbers 0 to 8 (inclusive) inside of it only
// the whole numbers

const arr1 = [];
for (let i = 0; i <= 8; i++){
    arr1.push(i);
}
console.log(`Array1:`, arr1);
arr1.push('finished');
// add in reverse order

const arr2 = [];
for (let i = 0; i <= 8; i++) {
    arr2.unshift(i);
}
console.log(`Array2: `, arr2);


// remove all of elements from array 1 using the remove from front 
// method, but also print out the array at each loop iteration 
while (arr1.length > 0) {
    const removedValue = arr1.shift();
    console.log(`Removed:`, removedValue, `New array:`, arr1);
}



// remove all of the element array 2 using the remove from Back method but still print out the array at each loop iteraiton
while (arr2.length > 0) {
    const oldFirstValue = arr2.pop();
    console.log(`Removed`, oldFirstValue, `Array2:`, arr2);

}