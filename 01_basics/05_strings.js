// strings can be denoted by single/double quote
// Learn strings concept thoroughly as this will help in backend and frontend

const name = "Mohit"
const  repoCount = 50

// console.log(name + repoCount + " Value");

// String Interpolation or modern way of using strings following: 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );

const gameName = new String ('hiteshhc')

// console.log(gameName[0]); // to access key value ! (0=H , 1=i etc. like this)
// console.log(gameName.__proto__); //to find out the object 

console.log(gameName.charAt(2)); //to know which character is at what place ( for ex 't is at 2')
console.log(gameName.indexOf('t')); //to know at which place is the character/alphabet ( for ex 't is at 2')


const newString = gameName.substring(0, 4) // substring when used gives the range of characters with the given numbers in bracket
console.log(newString);

const otherString = gameName.slice(-8, 4) // In 'slice' we can use negative values but in substring we cannot
console.log(otherString);


// how to use "trim" string

const anotherString = "   Mohit   "
console.log(anotherString);
console.log(anotherString.trim()); // using trim string it will automatically trim/cut the space given in the constant

const url = "www.mohit98@gmail.com"
console.log(url.replace('@','-'));  // replace string function will replace things as you want

console.log(url.includes('mohit')); // this tells us if the value is in the variable or not by giving boolean value's

// using split method 

const nickname = "Mohit-Motit-Mowheat"


 



// Read more about methods of strings on mdn js



