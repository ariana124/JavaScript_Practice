/**
 * quicksort - function that sorts an array using the quicksort algorithm [O(n * log n)]
 * @array: an array of integers
 * Return: a sorted array
 */
function quicksort(array) {
    // If the array is empty or only has one element there is no need to sort.
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[0];
        let less = [];
        let greater = [];
        array = array.slice(1);

        for (let i = 0; i < array.length; i++) {
            // If the current value at the current index is less than the pivot we add that value to the less array.
            if (array[i] <= pivot) {
                less.push(array[i]);
            }
            // If the current value at the current index is greater than the pivot we add that value to the greater array.
            if (array[i] > pivot) {
                greater.push(array[i]);
            }
        }

        less = quicksort(less);
        greater = quicksort(greater);

        let sortedArray = [...less, pivot, ...greater];

        return sortedArray;
    }
}


console.log(quicksort([17, 8, 1, 3, 5]));
console.log(quicksort([-7, 8, 1, 3, 5]));
console.log(quicksort([]));
console.log(quicksort([9]));
console.log(quicksort([-7, 8, 1, -3, 5]));
