const myArr = [1,2,3,4,5,6]
console.log(typeof (myArr));

const myArr1 = new Array(1,2,3,4,5,6)
console.log(typeof (myArr1))
// array is a non primitive datatype hence it works on the principle of heap it takes the 
//value from the reference ; change the original copy 
console.log(myArr1[1])// index starts from 0
//Array Mathods
myArr1.push(7)
console.log(myArr1)
myArr1.pop()
console.log(myArr1)
//myArr1.shift()// remove 1st item of the array 
myArr1.unshift(5)// add one item at the starting of the array 
console.log(myArr1)
console.log(myArr1.includes(7))
console.log(myArr1.indexOf(9))// when the item is not present in the array that is will give -1 as an output
const newArray = myArr1.join()

console.log(myArr1)
console.log(newArray) // join returns the array to string

//slice , splice
myArr1.shift()
console.log("A ", myArr1) 
const myn1 = myArr1.slice(1,3)

console.log("B ", myn1)
console.log(myArr1)
const myn2 = myArr1.splice(1,3)
console.log("B ", myn2)
console.log(myArr1)
// difeernce between splice and slice 
/*in splice the last index is included and the original array changes; it remove the items 
 of the mentioned index*/
// inslice the last index is not included and the original array doesnot change
