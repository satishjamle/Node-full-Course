// node --watch .\path : 
// // const math = require("./math") before require comman js

// const { default: multi } = require("./math");



import {multi ,divide,subs ,add} from "./math.js"

// import * as math from "./math" // some cases uses

console.log(add(5, 10))
console.log(multi(5, 10))
console.log(subs(5, 10))
console.log(divide(5, 10))
