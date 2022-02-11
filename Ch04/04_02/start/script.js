//spread operator to object

const dayTime = {
    breakfast: "oatmeal",
    lunch: "peanutu butter and jelly"
};

const nightTime = "mac and cheese";

const bacpkackingMeals = {
    ...dayTime,
    nightTime
};

console.log(bacpkackingMeals);