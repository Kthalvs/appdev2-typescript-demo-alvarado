"use strict";
(() => {
    let user = {
        name: "Kathline",
        age: 21,
        role: "student",
        permission: ["read"]
    };
    function access(role) {
        console.log("Role access:", role);
    }
    access(user.role);
    console.log("User:", user);
})();
