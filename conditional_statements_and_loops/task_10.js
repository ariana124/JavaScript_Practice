// A loop that will construct the following pattern:
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

for (let i = 1; i < 6; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
