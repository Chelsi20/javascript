
// describing this function
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//"this" function is used to refer the present context of the code
 //user.welcomeMessage()
 //user.username = "sam"
 //user.welcomeMessage()

 //console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


//***************************arrow function**********************************

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } //noemal function definition

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}// arrow function


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//explicit arrow function

// const addTwo = (num1, num2) =>  num1 + num2 // work krega prr values return nhi hogii

// const addTwo = (num1, num2) => ( num1 + num2 )//implicit arrow function
// agr hme return krna hai toh hme brackets lgane pdege

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()//loops me pdege ye topic indetail