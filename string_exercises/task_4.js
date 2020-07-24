// The function truncateString returns a truncated string.

function truncateString(string, number) {
    if (typeof(string) !== "string") {
        return -1;
    }

    // It slices starting from the 1st index to the number index - 1. 
    let newString = string.slice(0, number);

    return newString;
}

console.log(truncateString("White Night", 3));
