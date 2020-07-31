/**
 * truncateString - function that truncates a string
 * @string: a string
 * @number: number of characters in truncated string
 * Return: the truncated string or -1 for anything else
 */
function truncateString(string, number) {
    if (typeof(string) !== "string" || typeof(number) !== "number") {
        return -1;
    }

    if (number < 0) {
        return -1;
    }

    // It slices the string starting from the 1st index to the number index - 1. 
    let newString = string.slice(0, number);

    return newString;
}

console.log(truncateString("White Night", 3));
console.log(truncateString("Fly Away With Me", "5"));
console.log(truncateString("WANNABE ME", -3));
console.log(truncateString(true, 3));
console.log(truncateString("Bittersweet", 6));
