// The function findLargest finds the largest value in a group of numbers.

function findLargest(num1, num2, num3, num4, num5) {
    // Check to make sure all inputs are numbers.
    if ( typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number" || typeof(num4) !== "number" || typeof(num5) !== "number" ) {
        return alert("One of the inputs is not a number");
    }

    let numbers = [num1, num2, num3, num4, num5];

    // Return the largest value in the array.
    // The spread operator (...) breaks up the array into its elements.
    return alert(Math.max(...numbers));
}
