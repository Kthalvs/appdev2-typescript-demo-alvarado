// Special Type - null
let a: null;
a = null
// a = "Hi"

let b: null | string
b = null
b = "Hello"
// b = 10

// Special Type - undefined
let c: undefined;
c = undefined
// c = null
// c = "Hi"

let d: undefined | string
d = undefined
d = "Hi"
// d = null
// d = 10

// Display values
console.log("Value of b:", b)
console.log("Value of d:", d)