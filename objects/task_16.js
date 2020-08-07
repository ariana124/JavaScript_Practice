/**
 * swapMap - function that returns a copy of an object with the property and values switched
 * @obj: an object
 * Return: a copy of an object with the property and values switched 
 */
function swapMap(obj) {
    
    let myMap = new Map();
    let copy = {};
    
    for (let key in obj) {
        myMap.set(obj[key], key);
        copy[obj[key]] = key;
    };
 
    console.log(copy);
};

swapMap({first: 'Ariana', last: 'Bibiano'}); // Output: {Ariana: 'first', Bibiano: 'last'}
