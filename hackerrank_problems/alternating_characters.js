/**
 * alternatingCharacters - function that counts the number of deletions needed to remove repeated charcters
 * @s: a string of characters
 * Return: the number of deletions
 */
function alternatingCharacters(s) {

    let deletion = 0;

    for (let i = 0; i < s.length - 1; i++) {
        // If the first character is the same as the next character we increment.
        if(s[i] === s[i + 1]) {
            deletion++;
        }
    }
    return deletion;
}
