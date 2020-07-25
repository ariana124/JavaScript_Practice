// The function truncateString returns a truncated string.

function truncateString(string, number) {
    if (typeof(string) !== "string" || typeof(number) !== "number") {
        return -1;
    }

    // It slices the string starting from the 1st index to the number index - 1. 
    let newString = string.slice(0, number);

    return newString;
}

console.log(truncateString("White Night", 3));
console.log(truncateString("Fly Away With Me", "5"));
console.log(truncateString("WANNABE", -3));
console.log(truncateString(true, 3));
