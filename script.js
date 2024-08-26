// VARIABLES

// 1- var
// 2- let
// 3- const

// VAR

// var myStudent = "Fazal";
// console.log(myStudent);

// RE-DECLARED

// var myStudent = "Ahmad"
// console.log(myStudent);

// RE - ASSIGNED

// myStudent = "Abdul Rahman";
// console.log(myStudent);

// LET

// let myLanguage = "Javascript"
// console.log(myLanguage);

// RE-DECLARED

// let myLanguage = "Python";
// console.log(myLanguage);

// RE - ASSIGNED

// myLanguage = "Python"
// console.log(myLanguage);

// CONST

// const mySports = "Soccer";
// console.log(mySports);

// RE-DECLARED

// const mySports = "Cricket";
// console.log(mySports);

// RE - ASSIGNED

// mySports = "Soccer";
// console.log(mySports);

// DATA TYPES

// 1- STRING
// 2- NUMBER
// 9 -BIGINT
// 3- BOOLEAN
// 4- ARRAYS
// 5- OBJECTS
// 6- NULL
// 7- UNDEFINED
// 8- SYMBOL

// var a = "Laptop";
// var price = 500;
// var isNew = true;
// var c;
// var d = null;

// var cars = {
//   brand: "toyota",
//   model: 2020,
//   isUsed: true,
// };

// const fruits = ["mango", "1KG", 120];

// console.log(typeof a);
// console.log(typeof price);
// console.log(typeof isNew);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof(cars));
// console.log(typeof fruits);

// OPERATORS

// 1- Arithmetic Operators

// -> Addition
// -> Subtraction
// -> Multiplication
// -> Division
// -> Modulus
// -> Increment
// -> Decrment
// -> Exponentation

// var a = 10;
// var b = 5;
// var c = a % b;
// console.log(c);

// var count = 5;

// ++count;

// console.log(count);

// console.log(count++);

// console.log(count);

// --count;

// console.log(count);

// console.log(count--);

// console.log(count);

//Exponentation Operator

// let base = 2;
// let exponentation = 3;

// let result = base ** exponentation;
// console.log(result);

// 2- ASSIGNMENT OPERATORS

// let x = 5; // Assignment: x is now 5
// x += 5; // Addition assignment: x
// x = x + 5;
// console.log(x);

// Comparison Operators

// 1- == (Equal to)
// 2- === (Strict Equal to)
// 3- != (Not Equal to)
// 4- !== (Strict not Equal to)
// 5- > (Greater than)
// 6- >= (Greater than or equal to)
// 7- < (Lesss than)
// 8- <= (Less than or equal to)

// Logical Operators

// 1- && (AND Operator)
// 2- || (OR Operator)
// 3 - ! (NOT Operator)

// CONDITIONAL STATEMENT

// 1- if Statement
// 2- if else Statement
// Alternative - Ternary Operator
// 3-  if else if Statement
// 4- Switch Case

// var a = 10;
// var b = 10;

// if (a > b) {
//   console.log("A is Greater than B");
// } else {
//     console.log("A is Less than B")
// }

// var result = a > b ? "a is greater" : "b is greater";
// console.log(result);

// SWITCH CASE

// let fruit = "grapes";

// switch (fruit) {
//   case "apple":
//     console.log("Apples are $1.99 per pound");
//     break;
//   case "banana":
//     console.log("Banana are $2.39 per pound");
//     break;
//   case "mango":
//     console.log("Mango are $1.44 per pound");
//     break;
//   default:
//     console.log("Sorry we are out of fruits!");
//     break;
// }

// LOOPS

// while loop

// 1- Initialization
// 2- Condition
// 3- Increment / Decrement

// while loop

// let count = 0;

// while (count < 5) {
//   console.log(count);
//   count++;
// }

// do while loop

// let count = 0;

// do {
//   console.log(count);
//   count++;
// } while (count < 5);

// for loop

// for (let count = 0; count < 5; count++) {
//   console.log(count);
// }

// let fruits = ["banana", "apple", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// FUNCTIONS

// -> A function is a block of code designed to perform a specific task.

// Characterstics of Functions in JavaScript:

/**
 * Encapsulation
 * Resuablitiy
 * Parameters
 * Return Value
 * Scope
 */

// Types of Functions

/**
 * Named Functions
 *
 * Functions that have a name and can be called by that name.
 *
 * Anonymous Functions
 * Arrow Functions
 * IIFE (Immediately Invoked Function Expressions)
 * Higher Order Functions
 * Generator Functions
 * Asynchronous Functions (Async/Await)
 * Constructor Fucntions
 * Resursive Functions
 */

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Daniyal!");

// function multiply(x = 10, y = 3) {
// return x * y;
// }

// console.log(multiply());

// const greet = function() {
//   console.log("Hello, Programmers!");
// };

// greet();

// const greet = () => {
//   console.log("Hello, Devs!");
// }

// greet();

// Immediately Invoked Functions Expressions (IIFE)

// (function() {
//   console.log("This function runs immediately!");
// }) ();

// (function (a, b) {
//   console.log(a + b);
// })(7, 3);

// Higher Order Functions

// function higherOrderFunction(callback) {
//   return callback();
// }

// concat();

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var combined = arr1.concat(arr2);
// console.log(combined);

// includes()

// let numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.includes(3, 5);
// console.log(result);

// indexOf();

// let numbers = [1, 2, 3, 4, 5, 3, 6];
// let index = numbers.indexOf(3, 5);
// console.log(index);

// lastIndexOf();

// let numbers = [1, 2, 3, 4, 5, 6, 3, 7];
// let lastIndex = numbers.lastIndexOf(3);
// console.log(lastIndex);

// join();

// let words = ["Hello", "Mawaz"];
// let sentence = words.join(" ");
// console.log(sentence);

// toString();

// let numbers = [1, 2, 3, 4, 5, 6];
// let str = numbers.toString();
// console.log(str);

// ITERATION METHODS

// forEach();

// let numbers = [1, 2, 3];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// map();

// let numbers = [1, 2, 3, 4, 5, 6];
// let doubled = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubled);

// filter

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// })

// console.log(evenNumbers);

// reduce();

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (accumulator, currentElement) {
//   return accumulator + currentElement;
// });

// console.log(sum);

// some();

// let numbers = [1, 2, 3, 4, 5, 6];
// let hasEven = numbers.some(function(number) {
//     return number % 2 === 0;
// })

// console.log(hasEven);

// every();

// let numbers = [2, 4, 6];
// let hasEven = numbers.every(function(number) {
//     return number % 2 === 0;
// })

// console.log(hasEven);

// find();

// let numbers = [1, 2, 3, 4, 5, 6];
// let hasEven = numbers.find(function(number) {
//     return number % 2 === 0;
// })

// console.log(hasEven);

// findIndex();

// let numbers = [1, 3, 4, 6];
// let hasEven = numbers.findIndex(function(number) {
//     return number % 2 === 0;
// })

// console.log(hasEven);

// OBJECTS

// OBJECT LITERAL NOTATION

// const person = {
//   name: "Faizan",
//   age: 23,
//   occupation: "Student",
//   hobbies: ["reading", "sports", "coding"],
//   income: function () {
//     return 1000;
//   },
// };

// console.log(person.income());

// new Object Syntax()

// const person = new Object();

// person.name = "Faizan";
// person.age = 23;
// person.occupation = "Student";

// console.log(person);

// Constructor Function

// function Person(name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
// }

// const person1 = new Person("Faizan", 23, "Student");
// const person2 = new Person("Majid", "Don't Know", "Student");

// console.log(person1);
// console.log(person2);

// Classes

// class Person {
//   constructor(name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }
// }

// const person1 = new Person("Faizan", 23, "Student");
// const person2 = new Person("Majid", "Don't Know", "Student");

// console.log(person1);
// console.log(person2);

// ARRAY OF OBJECTS

// const Persons = [
//   { name: "Faizan", age: 23, occupation: "Student" },
//   { name: "Ahmad", age: 20, occupation: "Doctor" },
//   { name: "Bilal", age: 25, occupation: "Engineer" },
// ];

// console.log(Persons);

// FOR IN LOOP

// const person = {
//   name: "Faizan",
//   age: 23,
//   country: "Pakistan",
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
