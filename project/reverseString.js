const reverseStringByChopping = string => {
    // get last character in string

    const lastChar = string[string.length - 1];

    // no need to continue recursion if no more characters to collect
    if (string.lengh === 1) {
        return lastChar;
    }

    return lastChar + reverseStringByChopping(string.slice(0, -1));
}
console.log(reverseStringByChopping('dog'));