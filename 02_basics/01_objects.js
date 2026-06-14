
const mySym = Symbol("mykey")
const JSUser = {
    name : "chelsi jain",
    email: "jainchegoogle.com",
    Isloggedin : false,
    age : 18,
    [mySym] : "key1"
}
console.log(JSUser.email)
console.log(JSUser["email"])
//we can access the key and value of the object by both the methods but there are some 
//functions that cannot be access using the 1st methods that why it is important to learn 
//both the methods
console.log(JSUser[mySym])// intervie ques : define symbol in object and print it
Object.freeze(JSUser)// freeze the changes in values 
JSUser.email ="chejlsi345@gmail.com"
console.log(JSUser.email)// output :jainchegoogle.com because the changes are freeze

//JSUser.greeting = function() {
    console.log("hello js world");

//console.log(JSUser.greeting);//output: undefined
//JSUser.greeting();
//console.log(JSUser.greeting());
//JSUser.greeting = function(){
  //  console.log("Hello JS user");
//}
//JSUser.greetingTwo = function(){
   // console.log(`Hello JS user, ${this.name}`);
//}

//console.log(JSUser.greeting());
//console.log(JSUser.greetingTwo()); */

const JSuser = {};

JSuser.greeting = function() {
    console.log("hello js world");
}

JSuser.greeting();
