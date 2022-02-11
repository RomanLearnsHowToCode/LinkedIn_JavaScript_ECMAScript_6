//
console.log("Hello World")

// `` , '' , "" are different, and this works ONLY with `` 
function print(firstName){
    console.log(`Hello ${firstName}`);
}

print("Isabelle");

function createEmail(firstName, price){

    let shipping = 5.95;
    // Template Strings ${}
    console.log(`Hi ${firstName}! Thank you for shopping!
    Total: ${price}
    Shipping: ${shipping}
    Grand Total: ${price + shipping}
    `);
}

createEmail("Guy", 100);