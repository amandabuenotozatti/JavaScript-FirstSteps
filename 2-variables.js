console.log("Working with variables.");

const age = 33;
let name = "Amanda";

console.log("age: " + age);
console.log("name: " + name);

//Variable Initialization
var msg; //undefined
msg = "Hello, JavaScript!"; //assigned a String value
console.log(msg); //access a variable

//The following declares and assign a numeric value
var num = 100;
var hundred = num; //assigned a variable to a variable

//Multiple variables can also be declared in a single line separated by a comma
var one = 1, two = "two", three; //the last one undefined


//Loosely-typed 

//C# or Java has strongly typed variables. 
//It means a variable must be declared with 
//the data type that specifies the type of data a variable will store.
//
//JavaScript is a loosely typed language. 
//It means it does not require a data type to be declared. 
//You can assign any literal values to a variable, e.g., string, integer, float, boolean, etc.

var myvariable = 1;  // numeric value
myvariable = 'one'; // string value
myvariable = 1.1; // decimal value
myvariable = true; // Boolean value
myvariable = null; // null value