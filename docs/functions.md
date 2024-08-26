**FUNCTIONS**

Functions in JavaScript are blocks of reusable code that can be defined once and executed multiple times. They allow you to group together a set of statements to perform a specific task. Functions can accept parameters (inputs) and return values (outputs), but they don't have to.

**Defining a Function:**

You can define a function using the `function` keyword followed by a name for the function, parentheses `()`, and curly braces `{}` containing the code to be executed.

**Syntax:**

```javascript
function functionName(parameters) {
  // code to be executed
}
```

**Example:**

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

In this example, `greet` is the name of the function, and it accepts one parameter `name`. Inside the function, it prints "Hello, " followed by the value of `name`.

**Calling a Function:**

To execute a function, you need to call it by its name followed by parentheses `()` containing any arguments (values) if needed.

**Example:**

```javascript
greet("John");
```

This statement calls the `greet` function with the argument `"John"`, so it will print "Hello, John!" to the console.

**Return Values:**

Functions can also return values using the `return` keyword. This allows you to send data back from the function to where it was called.

**Example:**

```javascript
function add(a, b) {
  return a + b;
}

var result = add(3, 4);
console.log(result); // Output: 7
```

In this example, the `add` function returns the sum of `a` and `b`. When calling `add(3, 4)`, it returns `7`, which is then stored in the `result` variable and printed to the console.

**Scope:**

Scope refers to the visibility and accessibility of variables within a program. JavaScript has two main types of scope: block scope and global scope.

1. **Block Scope:**

   Variables declared inside a block (within curly braces `{}`) are only accessible within that block.

   **Example:**

   ```javascript
   function example() {
     if (true) {
       var message = "Hello!";
       console.log(message); // Output: Hello!
     }
     console.log(message); // Output: Hello!
   }

   example();
   ```

   In this example, `message` is declared inside the `if` block and can be accessed within that block as well as any nested blocks.

2. **Global Scope:**

   Variables declared outside of any function or block have global scope, meaning they can be accessed from anywhere in the program.

   **Example:**

   ```javascript
   var name = "John";

   function greet() {
     console.log("Hello, " + name + "!");
   }

   greet(); // Output: Hello, John!
   ```

   In this example, `name` is declared outside of any function and can be accessed from within the `greet` function.

Understanding functions and scope is essential in JavaScript programming as they allow you to write modular and organized code, making it easier to maintain and debug.
