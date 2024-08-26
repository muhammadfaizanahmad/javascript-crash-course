**1. `if-else` Statement:**

The `if-else` statement is used to make decisions based on conditions. It allows you to execute different blocks of code depending on whether a condition is true or false.

**Syntax:**

```javascript
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

**Example:**

```javascript
var age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

In this example, if the `age` variable is 18 or older, it prints "You are an adult." Otherwise, it prints "You are a minor."

**2. `switch-case` Statement:**

The `switch-case` statement is used to perform different actions based on different conditions. It's an alternative to multiple `if-else` statements when you have multiple conditions to check.

**Syntax:**

```javascript
switch (expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
  // code to be executed if expression doesn't match any case
}
```

**Example:**

```javascript
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("It's neither Monday, Tuesday, nor Wednesday.");
}
```

In this example, depending on the value of the `day` variable, it prints a different message. If `day` is "Monday," it prints "Today is Monday." If `day` is "Tuesday," it prints "Today is Tuesday." If `day` is "Wednesday," it prints "Today is Wednesday." If `day` is none of the specified values, it prints "It's neither Monday, Tuesday, nor Wednesday."

Both `if-else` and `switch-case` statements are used for making decisions in JavaScript, but they have different use cases depending on the situation.
