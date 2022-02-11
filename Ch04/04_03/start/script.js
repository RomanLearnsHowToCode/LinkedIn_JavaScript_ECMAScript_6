// Destructing

const sandwich = {
    title: "Reuben",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};

console.log(sandwich);
console.log(sandwich.title);


// Now I have desctructed this object and can target with {} any value
const {title2, price} = {
    title2: "Reuben2",
    price: 7,
    description: "A classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing",
        "sauerkraut",
        "cheese"
    ]
};

console.log(title2)


// WOW this is cool
const vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: "so much"
};

function marketing({destination, activity})
{

    return `Come to ${destination}, and do some ${activity}`;

}

console.log(marketing(vacation))
