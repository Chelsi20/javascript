//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack AND Heap
/* Stack (primitive) (call by number)==> koi bhi variable ki jo value hoti hai vo copy hoti
 na na ki original value vhange hoti hai
 For example:*/

 let gameName = "chelsi jain"
 let anothername = gameName 
 anothername = "kavish jain"
 console.table([gameName, anothername]);
 console.log(gameName)
 console.log(anothername)

 /*Heap (Reference type) => koi bhi variable ki value ek heap/space me store hoti hai or waha
 se uska reference milta hai. agar hum us reference ko kisi dusre variable me assign karte hai 
 to dono variable same reference ko point karte hai.
    For example:*/

 let userOne = {
    email: "chelsijain.com",
    upi: "chelsi@ybl"
 }

 let userTwo = userOne

userTwo.email = "jaichelsi@87.com";
console.log (userOne.email);
console.log (userTwo.email);

