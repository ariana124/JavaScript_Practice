// Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

function happyNumber(number) {

    if (typeof(number) !== 'number') {
        return "Input is not a number."
    }

    if (number < 0) {
        return "Number must be a positive integer."
    }

    for (let i = 0; i < 5; i++) {
        // The empty quotes typecastes the number into a string.
        let numStr = (number + '');

        // The method split, splits a string by each character.
        let splitNumbers = numStr.split('');

        // Using the map method it squares each number in the array.
        let square = splitNumbers.map((i) => { 
            return Math.pow(i, 2);
        })

        // Using the reduce method it adds the squared values together.
        let sumOfSquares = square.reduce((a, b) => {
            return a + b;
        })

        // Reassigns number.
        number = sumOfSquares;
    }

    if (number === 1) {
        return "A happy number :)";
    } else {
        return "Not a happy number :(";
    }

}   


console.log(happyNumber(49));
console.log(happyNumber(225));
console.log(happyNumber(144));
console.log(happyNumber('a'));
console.log(happyNumber(-43));
