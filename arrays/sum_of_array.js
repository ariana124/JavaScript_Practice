/**
 * arraySum - function that finds the sum of an array of integers
 * @array: an array of integers
 * Return: the sum of all the integers in the array
 */

 function arraySum(array) {

     const integerArray = array.every(function(element) {
         if (typeof(element) === 'number') {
             return true;
         } else {
             return false;
         }
     })

     if (integerArray === false) {
         return "Error: Some of the values in the array are not integers."
     } else {
         let sum = 0;

         for(i = 0; i < array.length; i++) {
             sum += array[i];
         }

         return sum;
     }
 }

 console.log(arraySum([2, 4, 6, 8])) // 20
 console.log(arraySum([-7, 0, 10])) // 3
 console.log(arraySum(['string', 5, 3, 1])) // Error msg
 console.log(arraySum([25, 50, 75, -100])) // 50
