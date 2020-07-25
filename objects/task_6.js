// The bubbleSort function implements the bubble sorting algorithm.

function bubbleSort(array) {

    // This outer loop goes through the entire array.
    for (let i = 0; i < array.length; i++) {
        // This inner loop does the actual checking and swapping of values.
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            } 
        }
    }

    return array;
}

let array = [9, 0, 5, 3, 2];
console.log(bubbleSort(array));
