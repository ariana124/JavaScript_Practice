// The function clock prints out the current time down to the second.

function clock() {

    // The function setInterval calls a function at specified intervals in milliseconds (1000 = 1 second).
    setInterval( function() {
        let today = new Date();
        let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        console.log(time);
    }, 1000);
}

clock();
