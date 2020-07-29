// The function findLowest returns the lowest value in an array.

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
​
// The function selectionSort sorts an array using the selection sort algorithm. [O(n^2)]

function selectionSort(array) {

    let sortedArray = [];
​
    while (array.length !== 0) {
        // Here we use our helper function findLowest to find the lowest value in the array.
        let lowest = findLowest(array);

        array = array.filter((num) => num !== lowest);
​
        let indexOfLowest = array.indexOf(lowest);

        array.splice(indexOfLowest, 1);

        sortedArray.push(lowest);
    }
    return sortedArray;
}
​
​
console.log(selectionSort([3, 2, 1, 5, 4]));
console.log(selectionSort([7, 6, 11, -5, 0]));
console.log(selectionSort([]));
console.log(selectionSort([4]));
console.log(selectionSort([8, 9, 1, 8, 4]));
