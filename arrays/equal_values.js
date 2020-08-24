/**
 * equalArrayValues - a function that checks if all values in an array are equal to each other
 * @array: an array of elements
 * Return: true if all the values are equal to each other, otherwise false
 */
function equalArrayValues(array) {
    // The every method tests whether all elements in the array pass the test determined by the provided function.
    // The shorthand version of the below implementation.
    // const equal = array.every(element => element === array[0]);

    const equalOrNot = array.every(function(element) {
        if (array[0] === element) {
            return true;
        } else {
            return false;
        }
    })

    return equalOrNot;
}

console.log(equalArrayValues([1, 1, 1]));
console.log(equalArrayValues(['a', 'a', 'a']));
console.log(equalArrayValues(['h', 'a', 'h', 'a']));
