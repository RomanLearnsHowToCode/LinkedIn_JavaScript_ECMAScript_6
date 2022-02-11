// ... - spread operator


let cats = ["Biscuit" , "Jungle"];
let dogs = ["Stella", "Camper"];

// this will nest our two arrays
let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];

/**
 * 
 *the spread operator will include the content of arrays cats and dogs inside the animals 2
 *Spread operator is very powerful for array manipulation
 */

let animals2 = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];

console.log(animals);

console.log(animals2);