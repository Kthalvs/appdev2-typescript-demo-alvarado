(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let user: User = {
        name: "Kathline",
        age: 21,
        role: "student",
        permission: ["read"]
    }
       
    function access(role: Role) {
        console.log("Role access:", role)
    }

    access(user.role)
    console.log("User:", user)
})()