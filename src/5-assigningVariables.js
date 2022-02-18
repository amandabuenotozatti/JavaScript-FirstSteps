console.log("Assigning variables");
let name = "Amanda";
let lastName = "Tozatti";

//How to concatenate strings and variables
console.log(name, lastName);
console.log(`I am ${name}`);             //returns I am Amanda
console.log(`I am ${name} ${lastName}`); //returns I am Amanda Tozatti

name = name + lastName;
console.log(name);