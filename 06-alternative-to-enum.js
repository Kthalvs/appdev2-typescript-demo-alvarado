"use strict";
(() => {
    // Literal Types (Alternative to Enum)
    // This restricts the value to specific strings only
    let userRole = 'admin';
    // Changing value within allowed options
    userRole = 'student';
    // invalid value (not part of allowed roles)
    // anotherUserRole = 'superadmin'
    // Function that accepts only specific roles
    function access(role) {
        console.log("Access role:", role);
        // ...
    }
    access(userRole);
});
