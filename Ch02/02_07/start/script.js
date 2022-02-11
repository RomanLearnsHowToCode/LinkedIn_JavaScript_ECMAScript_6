// set must be unique

let books = new Set();
books.add ("Pride and Prejudice");
books.add("War and Peace");

console.log(books);
console.log(books.size)

console.log("has Oliver Twist", books.has("Oliver Twist"));

if (books.has("Oliver Twist") === false) {
    console.log("books doesn't have Oliver Twiest, let's add it");
    books.add("Oliver Twist");
    console.log(books)
}

console.log("Let's delete Pride and Prejudice");
books.delete("Pride and Prejudice");
console.log(books)

// iterating throgh each item
books.forEach(function(item){
    console.log(item)
});