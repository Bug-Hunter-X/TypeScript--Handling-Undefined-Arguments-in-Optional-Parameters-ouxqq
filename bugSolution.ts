function greet(name: string | null | undefined = "Guest"): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, world!
console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!