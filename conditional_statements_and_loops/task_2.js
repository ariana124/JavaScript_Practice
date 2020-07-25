// The function checkSign returns an alert box deppending on if a number is negative or positive.

function checkSign(num1, num2, num3) {
    // Checks to make sure all of the inputs are numbers.
    if (typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number") {
        return alert("One of the inputs is not a number");
    }

    product = num1 * num2 * num3;

    if (product < 0) {
        return alert("The sign is -.");
    } else {
        return alert("The number is positive.")
    }
}

console.log(checkSign(3, 3, 5));
console.log(checkSign(-6, 1, 2 ));
console.log(checkSign('a', -8, 0 ));
console.log(checkSign(true, 9, -7 ));
