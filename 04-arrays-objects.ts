let hobbies = ["Reading", "Playing Badminton"]

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Kathline", "Kathline123", 102030]

// console.log(userList)
console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Kathline",
    age: 21,
    hobbies: ["Reading", "Playing Badminton"],
    role: {
        description: 'student',
        id: 1
    }
}

// Must not null or undefined
let val: string = "Kathline"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    id: 1,
    name: 'Kathline'
    // isStudent: true
}

console.log("Hobbies:", hobbies)
console.log("User List:", userList)
console.log("User:", user)
console.log("Data:", data)