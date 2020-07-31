/**
 * removeDuplicates - function that removes duplicates in an array
 * @array: an array
 * Return: the length of the array without duplicates
 */
let removeDuplicates = function(array) {
    // Set removes duplicates in an array.
    return new Set(array).size;
};


console.log(removeDuplicates([1,2,2,3,4]));
console.log(removeDuplicates(['apple', 'apple', 'peach', 'cherry']));
