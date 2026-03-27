// console.log("Hello World!")

let userName: string = "Kathline";
let userAge = 21; 

// ...

userAge = 21

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b = 5): number {
    return a + b
}

add(10)
// add('10')
add(10, 6)
// add(10, '6')