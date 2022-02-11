// => function and the arrow function difference

let studentList = function(students) {
    console.log(students);
}
studentList(["A","B","C"]);


let studentList2 = (students) => console.log(students);
studentList2(["A","B","C"]);

let list = ["Apple", "Banana", "Cherry"]
list.map(function(item){
    console.log(item);

// OR

list.map((item) => console.log(item));

})