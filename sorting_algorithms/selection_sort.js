/**
 * findLowest - function that returns the lowest value in an array.
 * @array: an array of integers
 * Return: the lowest value in the array
 */
function findLowest(array) {

    let lowest = null;

    for (let i = 0; i < array.length; i++) {
        // In the first iteration of the loop we set lowest to be the first value in the array.
        if (lowest === null) {
            lowest = array[i];
        }
        // In the following iterations, if the value in the next index is less than the current lowest then we reassign the lowest.
        if (array[i] < lowest) {
            lowest = array[i];
        }
    }
    return lowest;
}


/**
 * selectionSort - function that sorts an array using the selection sort algorithm [O(n^2)]
 * @array: an array of integers
 * Return: a sorted array
 */
function selectionSort(array) {

    let sortedArray = [];

    while (array.length !== 0) {
        // Here we use our helper function findLowest to find the lowest value in the array.
        let lowest = findLowest(array);
        // Filter creates a new array with all of the numbers that are not the current lowest.
        array = array.filter((num) => num !== lowest);
        // We add the current lowest value of the modified array to the end of the new sortedArray.
        sortedArray.push(lowest);
    }
    return sortedArray;
}


console.log(selectionSort([3, 2, 1, 5, 4]));
console.log(selectionSort([7, 6, 11, -5, 0]));
console.log(selectionSort([]));
console.log(selectionSort([4]));
console.log(selectionSort([8, 9, 1, 8, 4]));
