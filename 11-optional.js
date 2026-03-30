"use strict";
// Optional Values in parameter
function generateError(msg) {
    console.log("Error message:", msg);
}
generateError("An error occured"); // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
// generateError()
(() => {
    let user = {
        name: 'Kathline',
        age: 21
    };
    console.log("User info:", user);
})();
// Nullish Coalescing `??` operator 
let input = '';
// Returns fallback only if null or undefined
const didProvideInput = input ?? false;
console.log("Input check:", didProvideInput);
// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined
// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.
