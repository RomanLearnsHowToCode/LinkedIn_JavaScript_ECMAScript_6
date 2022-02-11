// maps

let course = new Map();

course.set("react", {description: "ui"});
// btw JEST is about testing!! important information
course.set("jest", {description: "testing"});

console.log(course)

console.log(course.react); // result in undefined
console.log(course.get("react")); // will return the value
console.log(course.get("jest")); // will return the value


// fairly new in JS language, very useful (MAP)
let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1,2]]
]);

// number of items in that map
console.log(details.size)

// iterating through the items on line 18!
details.forEach(function(item){
    console.log(item);
})