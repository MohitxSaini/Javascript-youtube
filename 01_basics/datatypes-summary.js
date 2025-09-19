// Primitive

// 7 types : 
// Strings 
// Number 
// Boolean 
// Null (Empty)
// Undefined 
// Symbol (for making a value unique symbol is used)
// Bigint (Scientif values and large values can be used in Bigint)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let username;

const id = Symbol('123')
const anotherId = Symbol||('123')

console.log(id === anotherId);

const bigNumber = 886095415515495457n


// Reference(Non primitive) :

// Array
// Objects {brackets in curly braces will automatically be value}
// Functions ( function in js can be traeted as variable)

const heroes = ["shaktiman", "naagraj", "Doga"];
{ name: "Mohit"
  age: 26
}

const myFunction = function(){
    console.log("Hello World");
    
}

// to know the type of datatype opf anything use :  Values given when tested
console.log(typeof bigNumber);      //bigint     
console.log(typeof outsideTemp);    //object for Null
console.log(typeof scoreValue);    // Number for value
console.log(typeof score);      // Number 
console.log(typeof username);   // Undefined for undefined
console.log(typeof myFunction);  // function/ objectfunction for function





// Is javascript ststically typed or dynamically typed? 