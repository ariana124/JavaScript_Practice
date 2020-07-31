/**
 * isBlank - function that checks if a string is empty or not
 * @string: a string
 * Return: true if the string is empty, false if it is not, and -1 if the input is not a string
 */
function isBlank(string) {
    if (typeof(string) !== "string") {
        return -1;
    }

    if (string.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isBlank("string"));
console.log(isBlank("s"));
console.log(isBlank("4"));
console.log(isBlank(""));
console.log(isBlank(9));
