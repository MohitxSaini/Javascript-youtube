let score = "33a" // if 33 is written like "33" then it'll become string 

// if written only 33 it will give number but as written as "33a" it will print as NaN

//if value given null it will give zero

// If boolean value given as true it will print "1" in (if false then zero as result)




//console.log(typeof score);
//console.log(typeof (score));

// Nan means Not a number ** 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// **In boolean "1" gives "true" and true gives 1 and "empty" gives "false" 


let isLoggenIn ="1"

let booleanIsLoggenIn = Boolean(isLoggenIn)
//console.log(booleanIsLoggenIn);

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber)

// to know whether it is a string or not use "typeof (required)"

// browser gives us string values and then we have to change it in diff. things



//***********OPERATIONS ***************/

let value = 3
let negvalue = -value
//console.log(negvalue);

// ATTACHING STRING IN FOLLWOING WAY

let str1 = "Hello"
let str2 = " Mohit"

let str3 = (str1 + str2)
//console.log(str3);


// Read about the following operations more on ecmascript website ( Primitive conversion & all)
//console.log("1"+2);

//console.log(1+2+"2");



// console.log(true);
// console.log(+true);
// console.log(true++); 

let gamecounter = 100
gamecounter++

console.log(gamecounter);  //( Here++ added 1 in the sum as it made the value total to 101)
// Read more about prefix and postfix (js mdn website)
