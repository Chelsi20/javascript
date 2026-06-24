// Immediately Invoked Function Expressions (IIFE)
//iife is used to invoke function immediately;
// it is used because kbhi kabar global scope me dikkat aa jaati hai toh ye usko solve krta hai 
//Avoiding polluting the global namespace by creating a new scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 
//known as named iife
//jb do iife use hote hai tbh semi colon lgana zaroori thoda h kyoki 
//isko end smjh nhi aata hai 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//known as unnamed iife 