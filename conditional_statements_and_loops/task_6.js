/**
 * averageMark - function that calculates the total sum of an array
 * @marks: an array of integers
 * Return: the corresponding letter grade depending on the marks total
 */
function averageMark(...marks) {
    // Here we use the spread operator to seperate the array into individual numbers.
    let arrayMarks = [...marks];

    // The reduce method takes the first value in the array and adds it to the next value until there's no more values to add.
    let total = arrayMarks.reduce(function(a,b) {
        if (typeof(a) !== 'number' || typeof(b) !== 'number') {
            alert("Mark is not a number.");
        }
        // Check to make sure the value is between 0-100 since grades aren't calculated with negative numbers.
        if (a <= 100 && a >= 0 || b <= 100 && b >= 0) {
            return a + b;
        }
    });    

    let average = total / marks.length;
    
    grade(average);
}


/**
 * grade - function that checks ehat range the average score is in
 * @average: an integer
 * Return: creates an alert box with the corresponding letter
 */
function grade(average) {

    if (average <= 100 && average >= 90) {
        alert("A");
    } else if (average <= 89 && average >= 80) {
        alert("B");
    } else if (average <= 79 && average >= 70) {
        alert("C");
    } else if (average <= 69 && average >= 60) {
        alert("D");
    } else if (average < 60) {
        alert("F");
    }
}
