let name = "   chelsi jain   "
let repoCount = 50
//console.log(name+repoCount+ " Value ")

//console.log(`my name is ${name} and my repo count is ${repoCount}`)// String Interpolation
const gameName = new String('chelsi-jain-123')
//console.log(gameName[2])
//console.log(gameName.length)
//console.log (gameName.toUpperCase());
//console.log(gameName.trim())
// Expected output :chelsi-jain-123
//The trim() method of String values removes whitespace from both
//ends of this string and returns a new string, without modifying the original string.
//console.log(gameName)

console.log(gameName.slice(0,5))// expected output ; chels
console.log(gameName.slice(-11,6))// expected output: si 

console.log(gameName.substring (0,5))
console.log(gameName.substring(-11,6))// output : chelsi
//in substring negative value are not allowd it stary from [0] index by default

console.log(gameName.split("-"))// output: [ 'chelsi', 'jain', '123' ] 
// it give array in return

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// output : https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))