// Javascript Bitstuffer
//
// By Daniele Pãolo Grech Pereira, 2020
// Adapted from my C language bitstuffer.

// VARS
///////

let sum = 0;                            // 1s counter
let a = [0, 1, 1, 1, 1, 1, 1, 0];     // Framing digits
let loopSize = 0;                       // For setting loop size.

// VECTOR CREATION
//////////////////

let newArray = [];       // Array to hold initial values.
let outPut = [];        // Array for output of bitstuffing.
let framedArray = [];   // Array to be framed.

// Set array with initial values:
newArray = [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];

// Frontload framedArray
for (var i = 0; i < a.length; i++) {
    framedArray.push(a[i]);
}

// STUFFING AND FRAMING
///////////////////////

// Build arrays with loop:
loopSize = newArray.length;
for (var i = 0; i < loopSize; i++) {

    // Check if current index is a 1 or 0:
    if (newArray[i] == 1) {
        sum += 1;   // Increment 1s counter.

        // Build arrays:
        outPut.push(1);         // Push a 1 value into output array.
        framedArray.push(1);    // Push a 1 value into the framed array.

        // If 1s counter is at 5, add a zero to array:
        if (sum == 5) {
            // Build arrays:
            outPut.push(0);
            framedArray.push(0);

            sum = 0;    // Reset 1s counter
        }
    } else {
        // If value at current index i is 0:
        sum = 0;    // Reset 1st counter.

        // Build arrays:
        outPut.push(0);
        framedArray.push(0);
    }
}

// Backload framedArray:
for (var i = 0; i < a.length; i++) {
    framedArray.push(a[i]);
}

// Arrays completed.

// PROGRAM OUTPUT
/////////////////

// Before stuffing:
console.log("Before stuffing: ");

// Print original array:
console.log(newArray + " -- " + newArray.length + " characters");


// After stuffing:
console.log("After stuffing: ");

// Print stuffed array:
console.log(outPut + " -- " + outPut.length + " characters");

// After framing:
console.log("After framing: ");

// Print bitstuffed framed array:
console.log(framedArray + " -- " + framedArray.length + " characters");


console.log(" PAUSED ");