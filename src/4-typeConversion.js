console.log("Type Conversion");

console.log("string = 22");
console.log(parseInt("22"));

//AUTOMATIC TYPE CONVERSIONS
//When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2

//METHODS
// Number()     Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

//The Unary + operator can be used to convert a variable to a number:
let y = "5"; //y is a string
let x = + y; //x is a number

//If the variable cannot be converted, it will still become a number
//but with the value NaN (Not a Number):

let y = "John"; //y is a string
let x = y;      //x is NaN

//NUMBER TO STRINGS
String(x);         // returns a string from a number variable x
String(123);       // returns a string from a number literal 123
String(100 + 23);  // returns a string from a number from an expression

//The Number method toString() does the same:
x.toString();
(123).toString();
(100 + 23).toString();

//DATES TO NUMBERS
d = new Date;
Number(d); // returns 1404568027739

//The method getTime() does the same:
d = new Date;
getTime(d); // returns 1404568027739

//DATES TO STRINGS
String(Date());     // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

//The Date method toString() does the same:
Date().toString();  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

//BOOLEANS TO NUMBERS
Number(false);     // returns 0
Number(true);      // returns 1

//BOOLEANS TO STRING
String(false);      // returns "false"
String(true);       // returns "true"


//MORE METHODS
// toExponential()	Returns a string, with a number rounded and written using exponential notation.
// toFixed()	    Returns a string, with a number rounded and written with a specified number of decimals.
// toPrecision()	Returns a string, with a number written with a specified length