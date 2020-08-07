/**
 * checkProperty - function that checks if an object has a specific property
 * @obj: an object containing key, value pairs
 * @property: the property of the object to check for
 * Return: true if the property exists in the object or false if it doesn't exist 
 */
function checkProperty(obj, property) {

    let check = obj.hasOwnProperty(property);
    return check;

    // The alternate way to check without using the built in function.
    // if (property in obj) {
    //     return true;
    // } else {
    //     return false;
    // }

}

console.log(checkProperty({animal: 'dog', drink: 'water'}, 'drink'));
console.log(checkProperty({animal: 'dog', drink: 'water'}, 'food'));
