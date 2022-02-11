// Destructor - array desctructor

let cities = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];

console.log(cities);


// this is used to assign a FIRST to "Spokane" etc, it is always the same index
let [first, second, third] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];

console.log(first,second,third)


// we can use ,, empty space and then assign another value like "ctvrty" here
let [prvni, druhy, , ctvrty] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seattle",
    "Portland"
];

console.log(prvni, druhy, ctvrty)