// THIS in arrow functions

// we have to use _this here
let person = {

    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
        let _this = this;
        this.hobbies.forEach(function(hobby) {
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);   
        });
    }

}

person.printHobbies();

console.log("AND THE RESULT OF ARROW FUNCTION")

// arrow function will handle this for us (scope)
let person2 = {

    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function() {
        //let _this = this;
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);   
        });
    }

}

person2.printHobbies();