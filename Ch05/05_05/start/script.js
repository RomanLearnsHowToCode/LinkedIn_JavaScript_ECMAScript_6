// generator, is with * the yield will be held anytime we want to pause

function* director(){
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let countdown = director();

// we can also access values
console.log("the value of yield is ", countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next()); // here the DONE wil be true;
