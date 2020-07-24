// The function isBlack checks if a string is empty or not.

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
