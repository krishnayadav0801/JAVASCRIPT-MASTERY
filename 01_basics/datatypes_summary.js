//  Primitive 
// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = true // java-script is a dynamic type language 
const isLoggedin = false
const outsideTemp = null
let useEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // both are not same

const bigNumber = 29384392828349999999n // bigint
console.log(typeof bigNumber);




// Non-Primitive / Reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "krish"] // Array

const user = {  // objects
    name: "krishna",
    age: "19",
    role: "Timepass"
}

const myFunction = function () {   // function
    console.log("Hello Krishna");
}

myFunction()


console.log(typeof myFunction); // function
console.log(typeof heros); // object
console.log(typeof user); // object

