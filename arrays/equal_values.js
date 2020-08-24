/**
 * equalArrayValues - a function that checks if all values in an array are equal to each other
 * @array: an array of elements
 * Return: true if all the values are equal to each other, otherwise false
 */
function equalArrayValues(array) {
    // The every method tets whether all elements in the array pass the test by the provided function.
    const equal = array.every(element => element === array[0]);
    
    return equal;
}

console.log(equalArrayValues([1, 1, 1]));
console.log(equalArrayValues(['a', 'a', 'a']));
console.log(equalArrayValues(['h', 'a', 'h', 'a']));
