/**
 * duplicateCount - function that counts the number of times a letter appears in a string
 * @string: a string of characters
 * Return: a string of the letters and the number of times it appears, or -1 if the string is empty or not of type string
 */
function duplicateCount(string) {
    
    let count = "";
    let map = new Map();
    
    // Check to make sure the string is of type string and that it's not empty.
    if (typeof(string) !== 'string' || string.length === 0) {
        return -1;
    }
    
    // Here we split the string into an array of characters using the spread operator.
    string = [...string];
    
    for (let i = 0; i < string.length; i++) {
        // By default if a map has no keys, it returns undefined.
        // So when it sees a character for the first time it will set it as a key in the map.
        if (map.get(string[i]) === undefined) {
            map.set(string[i], 1);
        } else {
            // Here we store the value of the key into the variable value.
            let value = map.get(string[i]);
            // If the key and its value exists, we increment the value + 1.
            if (value !== undefined) {
                map.set(string[i], value += 1);
            }
        }
    }
    
    // The function printPairs concatenates the key, value pairs into the string count. 
    let printPairs = (value, key) => {
        count += `${key}${value}`;
    }

    // We use the forEach method of Map() to execute the function printPairs on each key, value pair.
    map.forEach(printPairs);
    return count;
}


console.log(duplicateCount(1));
console.log(duplicateCount(""));
console.log(duplicateCount("aabbbnn"));
console.log(duplicateCount("sssssjji"));
