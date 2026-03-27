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


## 07-custom-type-role.ts


## 08-functions.ts


## 09-special-types.ts


## 10-form.html and 10-type-narrowing.ts


## 11-optional.ts
