// Dates in js date is measure in milliseconds

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);(oblect)

// let myCreatedDate = new Date(2023, 0, 23)(in js months starts with 0)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// (in DD/MM/YY OR STRUCTURED METHOD month start with 01)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));convert is into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// ideal way to sort the confusion of 00/01=> jan
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `(string interpolation)

newDate.toLocaleString('default', {
    weekday: "long",
    
})