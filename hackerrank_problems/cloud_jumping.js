/**
 * jumpingOnClouds - function that counts the number of jumps from the starting position to the last cloud(index)
 * @c: an array of binary integers, 0 = safe clouds, 1 = clouds to avoid
 * Return: the minimum number of jumps
 */
function jumpingOnClouds(c) {

    let jump = 0;

    for (let i = 0; i < c.length; i++) {
        // Checks if the current index and the index 2 spaces after is 0.
        if (c[i] === 0 && c[i + 2] === 0) {
            jump++;
            i++;
        } else if (c[i] === 0 && c[i + 1] === 0) {
            jump++;
        }
    }
    return jump;

}


console.log(jumpingOnClouds([0, 0, 0, 1, 0])); // 2 jumps
console.log(jumpingOnClouds([1, 0, 0, 1, 0])); // 2 jumps
console.log(jumpingOnClouds([0, 0, 0, 1, 0, 1, 0])); // 3 jumps
