# TypeScript: Handling undefined arguments in optional parameters

This repository demonstrates a common TypeScript error where a function expecting a string or null receives undefined, along with a solution.  The original code doesn't handle the case where no argument is provided, leading to a type error. The solution shows how to explicitly check for undefined and handle it appropriately.

## Bug
The `greet` function expects a string or null.  However, if called without an argument, it receives `undefined`, causing a type error.

## Solution
The solution modifies the function to explicitly check if the argument is undefined. If it is, a default value is used, preventing the type error.