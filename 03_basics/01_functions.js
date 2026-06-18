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

//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage("hitesh"))