// Default parameters

function add (x, y) {
    console.log(x + y);
}

x = 5;
y = 3;

add(x, y);

function haveFun(
    activityName = "noActivity", 
    time = "zero") {
    console.log(`Today I will go ${activityName} for ${time} hours.`);
}

// I can parse one parameter or none and it will change the value, or use default
haveFun("biking", 2.5);
haveFun();
haveFun("Hiking");