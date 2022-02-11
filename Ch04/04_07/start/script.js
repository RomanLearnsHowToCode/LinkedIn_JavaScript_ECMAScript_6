// Getter and Setter

let attendance = {
    _list: [],
    set addName(name){
        this._list.push(name);
    },
    get list(){
        return this._list.join(", ");
    }
};

attendance.addName = "Joanne Starr";
console.log(attendance.list)

attendance.addName = "Bill Starr";
attendance.addName = "Charleson Starr";

console.log(attendance.list)


class Hike {
    constructor(distance, pace){
        this.distance = distance;
        this.pace = pace;
    }

    get lengthInHours(){
        return `${this.calcLenght()} hours`;
    }

    calcLenght(){
        return this.distance / this.pace;
    }

}

const mtTallac = new Hike(10,2);

console.log(mtTallac.lengthInHours);