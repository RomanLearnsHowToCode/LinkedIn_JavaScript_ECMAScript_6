// classes with constructor 

class Vehicle {
    constructor(description, wheels){
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself(){
        console.log(`Im a ${this.description} with ${this.wheels} wheels.`)
    }

}

let coolSkiVan = new Vehicle("Cool Ski Van", 4);


console.log(coolSkiVan)
console.log(coolSkiVan.describeYourself());