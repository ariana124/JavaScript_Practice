/**
 * countSwaps - function that counts the number of swaps that happens in the bubble sorted array.
 * @a: an array
 * Return: the swap count, first, and last elements in the array
 */
function countSwaps(a) {

    let counter = 0;

    if (a.length < 1) {
        console.log(`Array is sorted in 0 swaps.`);
        console.log(`First Element: Array is empty.`);
        console.log(`Last Element: Array is empty.`);
        return;
    }

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                counter++;
            }
        }
    }

    let firstElement = a[0];
    let lastElement = Math.max(...a);

    console.log(`Array is sorted in ${counter} swaps.`);
    console.log(`First Element: ${firstElement}`);
    console.log(`Last Element: ${lastElement}`);

}


countSwaps([3, 4, 2, 5]);
countSwaps([7, 8, 9]);
countSwaps([]);
countSwaps([10]);
