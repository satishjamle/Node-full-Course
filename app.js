// console.log("subcribe"),
// global.console.log("subcribe tchinical")
// globalThis.console.log("subscribe");


// globalThis.console.log(module)

// console.log(globalThis.module)

// //common js


// console.log(process)
// console.log(document)


// math 
// console.log(add(5,10))  // error



//  const add = require("./math")
//  console.log(add(5,10))


//  const divide = require("./math")
//  console.log(divide(2 , 50))


// export in node js


//  const { add, multi, subs, divide } = require("./math")
//   console.log(add(5,10))
//   console.log(multi(5,10))
//   console.log(subs(5,10))
//   console.log(divide(5,10))


const math = require("./math")
console.log(math.add(5, 10))
console.log(math.multi(5, 10))
console.log(math.subs(5, 10))
console.log(math.divide(5, 10))

