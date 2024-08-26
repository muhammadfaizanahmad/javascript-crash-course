**LOOPS**

Loops in JavaScript are used to execute a block of code repeatedly as long as a specified condition is true. There are mainly three types of loops in JavaScript: `for`, `while`, and `do-while`. Let me explain each of them with examples:

**1. `for` Loop:**

The `for` loop is used when you know how many times you want to repeat a block of code.

**Syntax:**

```javascript
for (initialization; condition; increment / decrement) {
  // code to be executed
}
```

**Example:**

```javascript
for (var i = 0; i < 5; i++) {
  console.log("Iteration " + (i + 1));
}
```

In this example, the loop will iterate 5 times. It starts with `i = 0`, executes the code inside the loop (printing "Iteration 1"), then increments `i` by 1. This process repeats until `i` becomes 4 (since `i < 5`), and then the loop stops.

**2. `while` Loop:**

The `while` loop is used when you don't know in advance how many times you want to repeat a block of code, but you know the condition under which you want to continue looping.

**Syntax:**

```javascript
while (condition) {
  // code to be executed
}
```

**Example:**

```javascript
var count = 0;

while (count < 3) {
  console.log("Count is " + count);
  count++;
}
```

In this example, the loop will iterate as long as `count` is less than 3. It starts with `count = 0`, executes the code inside the loop (printing "Count is 0"), then increments `count` by 1. This process repeats until `count` becomes 3 (since `count < 3`), and then the loop stops.

**3. `do-while` Loop:**

The `do-while` loop is similar to the `while` loop, but it executes the code block at least once before checking the condition.

**Syntax:**

```javascript
do {
  // code to be executed
} while (condition);
```

**Example:**

```javascript
var num = 1;

do {
  console.log("Number is " + num);
  num++;
} while (num <= 3);
```

In this example, the loop will always execute the code block at least once, regardless of the condition. It starts with `num = 1`, prints "Number is 1", then increments `num` by 1. This process repeats until `num` becomes 4, but the loop stops because `num <= 3` is no longer true.

These are the basic types of loops in JavaScript. They help you to efficiently repeat a block of code multiple times based on specified conditions.
