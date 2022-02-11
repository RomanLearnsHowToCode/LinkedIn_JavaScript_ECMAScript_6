// Promise

/**
 * 
 * @param {
 * } seconds 
 * @returns 
 */
// Promises are fail or true
const delay = (seconds) => 
    new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
    reject(
        new Error("Seconds must be a number")
        );
    }

    setTimeout(resolve, seconds * 1000)
    
    });


console.log("Zero")
delay(1).then(() => console.log("One Second"));
delay("one").then(() => console.log("Five Seconds"));