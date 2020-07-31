/**
 * readingStatus - a function that checks if the readingStatus property of an object is true or not and displays the corresponding message [O(n)]
 * @objArray: an array of objects
 * Return: console logs the appropriate message depending on the readingStatus
 */
function readingStatus(objArray) {

    for (let i = 0; i < objArray.length; i++) {
        let temp = objArray[i];
        let readingStatus = temp.readingStatus;

        if (readingStatus === true) {
            console.log(`Already read ${temp.title} by ${temp.author}.`);
        } else {
            console.log(`You still need to read ${temp.title} by ${temp.author}.`)
        }
    }
}

let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

readingStatus(library);
