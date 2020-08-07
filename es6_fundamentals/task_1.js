/**
 * checkObjValues - function that compares two objects to determine if they contain equivalent property values
 * @obj1: first object
 * @obj2: object that's compared to the first object
 * Return: true if the obj2  has the same value, false for otherwise
 */
function checkObjValues( obj1, obj2, property ) {

    if ( ( obj1[property] === obj2[property] ) && ( obj1[property] !== undefined && obj2[property] !== undefined ) ) {
        return true;
    } else {
        return false;
    }
}

console.log(checkObjValues({chicken: 'nuggets'}, {chicken: 'fries'}, 'chicken')); // false
console.log(checkObjValues({chicken: 'nuggets'}, {chicken: 'nuggets'}, 'chicken')); // true
console.log(checkObjValues({chicken: 'nuggets'}, {chicken: 'nuggets'}, 'dog')); // false
