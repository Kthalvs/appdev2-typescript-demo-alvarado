"use strict";
(() => {
    let Role;
    (function (Role) {
        // SuperAdmin,
        // SuperAdmin = 1,
        Role["SuperAdmin"] = "SuperAdmin";
        // Teacher,
        Role["Teacher"] = "Teacher";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    // let userRole: Role = 0;
    let userRole = Role.Student;
    console.log("User Role:", userRole);
})();
