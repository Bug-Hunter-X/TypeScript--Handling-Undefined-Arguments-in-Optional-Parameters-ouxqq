function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!

//Uncommon error:
// If the function is called without any argument:
console.log(greet()); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.