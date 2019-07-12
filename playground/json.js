// let obj = {name:"rakib",age:24};
// let objString = JSON.stringify(obj)
// console.log(typeof(objString))
// console.log(objString)

// console.log("Parsing json to Strings")

// let personString = '{"name":"Rakib Sarwer","Age":25}';
// let peron = JSON.parse(personString)
// console.log(typeof person);
// console.log(peron)

// console.log("end here")
const fs = require('fs')

let person ={
    name: "Rakib Sarwer",
    age:24,
    blood:"A+"
}
let personString = JSON.stringify(person)
let writeJson = fs.writeFileSync('notes.js',personString)

let notesRead = fs.readFileSync('notes.js');
let noteParse = JSON.parse(notesRead)
console.log(noteParse)
console.log(typeof noteParse)


