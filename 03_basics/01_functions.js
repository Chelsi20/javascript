function sayMyName(){
    console.log("C");
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("S");
    console.log("I");
}
sayMyName//-- reference of the function
//sayMyName()//-- call the function

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
//addTwoNumbers(3, 5)
const result = addTwoNumbers(3, 5) //-- undefined
//console.log(result);// because the function does not return anything, it will return undefined
//  by default
//to correct this, we need to return the result from the function
function addTwoNumbers(num1, num2){
    return num1 + num2;
}
//const result = addTwoNumbers(3, 5);
//console.log(result);

function loginUserMessage(username = "sam") {
    if(!username){//if username is not provided, it will be undefined, which is false
        console.log("PLease enter a username");
        return// this will stop the execution of the function and return undefined
    return (`${username} just logged in`)//string interpolation
}
}
//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("hitesh"))

function cartPriceCounter(...num1) { // rest operator ; rest operator packages all the 
    return num1 // given argument in a array 
}
    //console.log(cartPriceCounter(100,200,300))

function cartPriceCounter(val_1,val_2,...num1) { // rest operator ; rest operator packages all the 
    return {val_1,val_2,num1} // given argument in a array     
}
    console.log(cartPriceCounter(100,200,300,400,600))
    //output is: { val_1: 100, val_2: 200, num1: [ 300, 400, 600 ] }
    

const user = {
    username : "hitesh",
    price: 199
}
 function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)

 }
 //handleObject(user)
 handleObject({
    username:"sam",
    price: 399
 })

 const myArray = [100,200,400,600]

 function returnValueSecond(getArray){
    return getArray[1]
 }
 //console.log(returnValueSecond(myArray));
 console.log(returnValueSecond([200,400,500,600]));