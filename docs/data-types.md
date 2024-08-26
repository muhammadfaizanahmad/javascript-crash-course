**DATA TYPES**

Certainly! In JavaScript, data types define the kinds of values that variables can hold. Here are the main data types in JavaScript explained in simple words with examples:

1. **Number**: This data type represents numerical values.

   Example:

   ```javascript
   var age = 25;
   var height = 5.8;
   ```

2. **String**: Strings represent textual data, such as words or sentences. They are enclosed in single (`'`) or double (`"`) quotes.

   Example:

   ```javascript
   var name = "John";
   var message = "Hello, World!";
   ```

3. **Boolean**: Booleans represent a logical value, either `true` or `false`.

   Example:

   ```javascript
   var isStudent = true;
   var hasCar = false;
   ```

4. **Undefined**: This data type represents a variable that has been declared but hasn't been assigned a value yet.

   Example:

   ```javascript
   var address;
   ```

5. **Null**: Null represents the absence of a value.

   Example:

   ```javascript
   var result = null;
   ```

6. **Object**: Objects are complex data types that can store multiple values (properties) as key-value pairs.

   Example:

   ```javascript
   var person = {
     name: "John",
     age: 25,
     isStudent: true,
   };
   ```

7. **Array**: Arrays are special kinds of objects that store a list of values.

   Example:

   ```javascript
   var fruits = ["apple", "banana", "orange"];
   ```

8. **Function**: Functions are special kinds of objects that can be called to perform a task.

   Example:

   ```javascript
   function greet(name) {
     console.log("Hello, " + name + "!");
   }
   ```

These are the main data types in JavaScript. Understanding them is fundamental for working with variables and manipulating data in JavaScript programs.

In JavaScript, there are two main categories of data types: primitive and non-primitive (also known as reference) data types. Let's explore the differences between them:

**Primitive Data Types:**

1. **Stored Directly**: Primitive data types are stored directly in the variable's location in memory.

2. **Immutable**: Once a primitive value is assigned to a variable, it cannot be changed. Any operation that appears to modify the value actually creates a new value.

3. **Examples**:
   - Number
   - String
   - Boolean
   - Undefined
   - Null
   - Symbol (introduced in ECMAScript 6)

**Non-Primitive (Reference) Data Types:**

1. **Stored by Reference**: Non-primitive data types are stored by reference. This means that the variable holds a reference (memory address) to the location in memory where the actual data is stored.

2. **Mutable**: Non-primitive values can be changed because they are stored by reference. Modifying the value through one reference will affect all other references to the same value.

3. **Examples**:
   - Object
   - Array
   - Function

**Differences:**

1. **Storage**: Primitive data types are stored directly in memory, while non-primitive data types are stored by reference.

2. **Mutability**: Primitive values are immutable, meaning they cannot be changed once assigned. Non-primitive values are mutable and can be modified.

3. **Passing Values**: When passing primitive values to functions or assigning them to variables, a copy of the value is passed. However, when passing non-primitive values, a reference to the original value is passed.

4. **Comparison**: Primitive values are compared by their value (e.g., `==` or `===`), while non-primitive values are compared by reference (i.e., whether they refer to the same location in memory).

5. **Size**: Primitive data types have a fixed size in memory, while non-primitive data types can vary in size depending on the amount of data they hold.

Understanding these differences is crucial when working with JavaScript, as it affects how values are stored, manipulated, and passed between different parts of a program.
