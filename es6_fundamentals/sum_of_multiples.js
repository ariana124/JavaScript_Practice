/**
 * sumOfMultiples - a function that adds the multiples of the factors up to the target number
 * @factors: an array of numbers to get the multiples of 
 * @target: the target number
 * Return: the sum of the multiples of the factor
 */
function sumOfMultiples(factors, target) {

    // We are using a set so that when we add values to the set they are not duplicated.
    let multiples = new Set();
  
    // If the array of factors is empty we have to set the values to 3 and 5.
    if (factors.length === 0) {
        factors = [3, 5];
    }
  
    for (i = 0; i < factors.length; i++) {
        factor = factors[i];
        current_multiple = factor;
  
        while (current_multiple < target) {
            multiples.add(current_multiple);
            current_multiple += factor;
        }
    }
  
    // Using the spread operator we convert the set into an array.
    multiples = [...multiples];
    
    // Here we use the reduce method to add all of the values in the array.
    let sum = multiples.reduce(function(a, b) {
        return a + b }, 0);
  
    return sum;
  }
  
console.log(sumOfMultiples([3, 5], 20)); // output: 78
console.log(sumOfMultiples([5], 30)); // output: 75
console.log(sumOfMultiples([], 20)); // output: 78
console.log(sumOfMultiples([9], 10)); // output: 9
