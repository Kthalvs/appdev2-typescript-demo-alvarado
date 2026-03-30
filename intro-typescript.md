# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
This file introduces the basics of TypeScript such as variable types and functions. It shows how TypeScript enforces correct data types and prevents assigning the wrong type (e.g., string to number).

## 02-vanilla-js-types.js
This file demonstrates how JavaScript checks data types using the `typeof` operator. It shows that JavaScript handles types at runtime unlike TypeScript.

## 03-flexible-types.js
This file shows the use of the `any` type which allows a variable to hold any type of value. It is flexible but not safe because it removes type checking.

## 04-arrays-objects.ts
This file explains how to define arrays and objects with specific types. It demonstrates strict typing for object properties and nested objects.

## 05-enum.ts
This file introduces enums which define a set of named constants. It helps manage fixed values like user roles in a structured way.

## 06-alternative-to-enum.ts
This file shows an alternative to enums using literal types. It restricts values to specific strings like 'admin', 'teacher', or 'student'.

## 07-custom-type-role.ts
This file demonstrates custom types using the `type` keyword. It helps create reusable and organized type definitions for objects and variables.

## 08-functions.ts
This file explains how to define function types, return types, and special types like `void` and `never`. It also shows how to use functions as types (callbacks).

## 09-special-types.ts
This file demonstrates special types such as `null` and `undefined`. It shows how variables can accept only specific values or combinations.

## 10-form.html and 10-type-narrowing.ts
These files demonstrate how TypeScript works with the DOM. It shows how to safely access elements by checking for null values using type narrowing.

## 11-optional.ts
This file explains optional parameters and properties using `?`. It also introduces the nullish coalescing operator `??` which only checks for null or undefined.
