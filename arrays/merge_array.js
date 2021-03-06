/**
 * mergeArray - function that merges 2 arrays and removes dupilcates
 * @array1 - first array
 * @array2 - second array
 * Return: a new array containing the values of the first and second arrays with no duplicates
 */

function mergeArray(array1, array2) {

    array = [...array1, ...array2];

    array = new Set(array);

    return [...array]
}

console.log(mergeArray([2, 4, 6], [1, 3, 5]));
console.log(mergeArray(['blue', 'red', 'green'], [23, 20, 17]));
console.log(mergeArray([2, 4, 6], [1, 3, 5, 6]));
