const Thirdwheeling=["Chelsi" , "ishu", "vivaan"]
const vivaan_friends=["adit"]
//Thirdwheeling.push(vivaan_friends)
//console.log(Thirdwheeling)
//const teamDiamond = Thirdwheeling.concat(vivaan_friends)
//console.log(teamDiamond)
const team_diamond = [ ...Thirdwheeling , ...vivaan_friends ]
console.log(team_diamond)

const mixed_groups = ["Chelsi" ,[["ishu", "adit"] , "vivaan"]]
console.log (mixed_groups)
const mazburan = mixed_groups.flat(Infinity)
console.log(mazburan)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));