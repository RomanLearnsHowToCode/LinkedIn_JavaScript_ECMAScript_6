const delay = (seconds) =>
new Promise((resolves) => 
setTimeout(resolves, seconds * 1000)
);

// await is available only with async function! 
/**
 * 
 * Syntactical choice, more readable and cleaner code
 * Good for debugging and error handling 
 */

const countToFive = async () => {

    console.log("Zero Seconds");
    await delay(1);
    console.log("One Second");
    await delay(2);
    console.log("Two Seconds");
    await delay(3);
    console.log("Three Seconds");

}

countToFive();