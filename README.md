# Learning JavaScript

A comprehensive guide to learn JavaScript from basics to advanced concepts. This repository focuses on providing the best JavaScript learning experience through practical examples and detailed explanations.

## Topics

- [1. Variables](#1-variables)
- [2. Data Types](#2-data-types)
- [3. Operators](#3-operators)
- [4. Conditional Statements](#4-conditional-statements)
- [5. Loops](#5-loops)
- [6. Functions](#6-functions)
- [7. Arrays](#7-arrays)
- [8. Objects](#8-objects)
- [9. Scope and Hoisting](#9-scope-and-hoisting)
- [10. ES6+ Modern Features](#10-es6-modern-features)
- [11. DOM Manipulation](#11-dom-manipulation)
- [12. Event Handling](#12-event-handling)
- [13. JSON](#13-json-javascript-object-notation)
- [14. Fetch API & HTTP Requests](#14-fetch-api--http-requests)
- [15. Promises](#15-promises)
- [16. Async/Await](#16-asyncawait)
- [17. Classes](#17-classes-es6)
- [18. Error Handling](#18-error-handling)
---

### 1. Variables

Variables are containers that store data values. JavaScript has three ways to declare variables:

**`var`** - The old way (ES5):
- Function-scoped or globally-scoped
- Can be redeclared and updated
- Hoisted (moved to top of scope)

**`let`** - The modern way (ES6):
- Block-scoped
- Can be updated but not redeclared in same scope
- Not hoisted

**`const`** - For constants (ES6):
- Block-scoped
- Cannot be updated or redeclared
- Must be initialized when declared

**Why use them:**
- `var` is outdated and can cause bugs due to hoisting
- `let` is perfect for variables that change
- `const` is ideal for values that shouldn't change

```javascript
// var example (avoid using)
var oldVariable = "I can be redeclared";
var oldVariable = "See, redeclared!"; // This works but can cause bugs

// let example (recommended for changing values)
let userName = "John";
userName = "Jane"; // Can be updated
// let userName = "Bob"; // Error: Cannot redeclare

// const example (recommended for fixed values)
const PI = 3.14159;
const API_URL = "https://api.example.com";
// PI = 3.14; // Error: Cannot reassign const
```

**Learn More:** [MDN - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) | [MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) | [MDN - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### 2. Data Types

JavaScript has several built-in data types to represent different kinds of information:

**Primitive Types:**
- **String**: Text data
- **Number**: Numeric data (integers and decimals)
- **Boolean**: True or false values
- **Undefined**: Variable declared but not assigned
- **Null**: Intentionally empty value
- **Symbol**: Unique identifier (ES6)
- **BigInt**: Large integers (ES2020)

**Non-Primitive Type:**
- **Object**: Complex data type (arrays, objects, functions)

**Why important:** Different data types have different methods and behaviors.

```javascript
// String - for text
let firstName = "Alice";
let lastName = 'Smith'; // Single or double quotes work
let fullName = `${firstName} ${lastName}`; // Template literal (ES6)

// Number - for numeric values
let age = 25;
let price = 99.99;
let negative = -10;

// Boolean - for true/false
let isStudent = true;
let isGraduated = false;

// Undefined - variable exists but no value assigned
let undefinedVar;
console.log(undefinedVar); // undefined

// Null - intentionally empty
let emptyValue = null;

// Checking types
console.log(typeof firstName); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof undefinedVar); // "undefined"
console.log(typeof emptyValue); // "object" (this is a known quirk)
```

**Learn More:** [MDN - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) | [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### 3. Operators

Operators perform operations on variables and values.

**Arithmetic Operators:** Perform mathematical calculations
**Assignment Operators:** Assign values to variables
**Comparison Operators:** Compare values and return boolean
**Logical Operators:** Combine or invert boolean values

**Why important:** Operators are essential for calculations, comparisons, and logical decisions.

```javascript
// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // 13 (addition)
console.log(a - b); // 7 (subtraction)
console.log(a * b); // 30 (multiplication)
console.log(a / b); // 3.333... (division)
console.log(a % b); // 1 (modulus - remainder)
console.log(a ** b); // 1000 (exponentiation ES2016)

// Assignment Operators
let x = 5;
x += 3; // x = x + 3 → x becomes 8
x -= 2; // x = x - 2 → x becomes 6
x *= 2; // x = x * 2 → x becomes 12
x /= 3; // x = x / 3 → x becomes 4

// Comparison Operators
console.log(5 == "5");  // true (loose equality - converts types)
console.log(5 === "5"); // false (strict equality - no conversion)
console.log(5 != "5");  // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(10 > 5);    // true
console.log(3 <= 3);    // true

// Logical Operators
console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true (OR - at least one must be true)
console.log(!true);         // false (NOT - inverts the value)
```

**Learn More:** [MDN - Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

### 4. Conditional Statements

Conditional statements execute different code blocks based on different conditions.

**Types:**
- **if...else**: Basic conditional logic
- **else if**: Multiple conditions
- **switch**: Multiple specific value checks
- **Ternary operator**: Short conditional expressions

**Why important:** Control the flow of your program based on different scenarios.

```javascript
// if...else statement
let age = 18;
if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote yet.");
}

// Multiple conditions with else if
let score = 85;
if (score >= 90) {
    console.log("Grade: A - Excellent!");
} else if (score >= 80) {
    console.log("Grade: B - Good job!");
} else if (score >= 70) {
    console.log("Grade: C - Average");
} else if (score >= 60) {
    console.log("Grade: D - Below average");
} else {
    console.log("Grade: F - Failed");
}

// switch statement (good for specific values)
let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

// Ternary operator (shorthand for simple if...else)
let temperature = 25;
let weather = temperature > 20 ? "Warm" : "Cold";
console.log(weather); // "Warm"
```

**Learn More:** [MDN - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) | [MDN - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) | [MDN - Conditional Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### 5. Loops

Loops allow you to repeat code multiple times without writing it repeatedly.

**Types:**
- **for loop**: When you know how many times to repeat
- **while loop**: Repeat while a condition is true
- **do...while loop**: Execute at least once, then repeat while condition is true
- **for...in loop**: Iterate over object properties
- **for...of loop**: Iterate over iterable values (ES6)

**Why important:** Loops are essential for processing arrays, repeating tasks, and handling collections of data.

```javascript
// for loop - most common for counting
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// while loop - when you don't know exact number of iterations
let countdown = 5;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// do...while loop - executes at least once
let number = 0;
do {
    console.log(`Number: ${number}`);
    number++;
} while (number < 3);

// for...in loop - for object properties
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// for...of loop - for iterable values (ES6)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`Color: ${color}`);
}
```

**Learn More:** [MDN - Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) | [MDN - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) | [MDN - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

### 6. Functions

Functions are reusable blocks of code that perform specific tasks.

**Types:**
- **Function Declaration**: Traditional way, hoisted
- **Function Expression**: Assigned to variable, not hoisted
- **Arrow Function**: Modern ES6 syntax, shorter
- **Anonymous Function**: Function without a name
- **IIFE**: Immediately Invoked Function Expression

**Why important:** Functions organize code, avoid repetition, and make code modular and testable.

```javascript
// Function Declaration (hoisted - can be called before declaration)
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Function Expression (not hoisted)
const calculateArea = function(length, width) {
    return length * width;
};

// Arrow Function (ES6) - shorter syntax
const multiply = (a, b) => a * b;

// Arrow function with multiple statements
const processUser = (name, age) => {
    const greeting = `Hello, ${name}`;
    const ageMessage = `You are ${age} years old`;
    return `${greeting}. ${ageMessage}`;
};

// Function with default parameters (ES6)
const greetWithDefault = (name = "Guest", greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};

// Higher-order function (function that takes/returns functions)
const createMultiplier = (multiplier) => {
    return (number) => number * multiplier;
};
const double = createMultiplier(2);
console.log(double(5)); // 10

// Examples
console.log(greetUser("Alice"));
console.log(calculateArea(5, 3));
console.log(multiply(4, 7));
console.log(greetWithDefault()); // Uses defaults
console.log(greetWithDefault("Bob", "Hi")); // Uses provided values
```

**Learn More:** [MDN - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) | [MDN - Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### 7. Arrays

Arrays store multiple values in a single variable and provide methods to manipulate data.

**Key Concepts:**
- Arrays are zero-indexed (first element is at index 0)
- Arrays can store different data types
- Arrays have a `length` property
- Arrays are objects in JavaScript

**Why important:** Arrays are fundamental for storing lists of data like user names, products, or any collection.

```javascript
// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null]; // Can mix data types

// Accessing elements
console.log(fruits[0]); // "apple" (first element)
console.log(fruits[fruits.length - 1]); // "orange" (last element)

// Common Array Methods

// Adding elements
fruits.push("grape"); // Add to end
fruits.unshift("mango"); // Add to beginning
console.log(fruits); // ["mango", "apple", "banana", "orange", "grape"]

// Removing elements
let lastFruit = fruits.pop(); // Remove from end
let firstFruit = fruits.shift(); // Remove from beginning
console.log(lastFruit); // "grape"
console.log(firstFruit); // "mango"

// Finding elements
let index = fruits.indexOf("banana"); // Returns index or -1 if not found
let exists = fruits.includes("apple"); // Returns true/false

// Transforming arrays (these create new arrays)
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let longFruits = fruits.filter(fruit => fruit.length > 5);
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

// Iterating arrays
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

console.log("Original:", fruits);
console.log("Uppercase:", upperFruits);
console.log("Long fruits:", longFruits);
console.log("Total length:", totalLength);
```

**Learn More:** [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

### 8. Objects

Objects store data in key-value pairs and can contain properties and methods.

**Key Concepts:**
- Objects are collections of properties
- Properties can be accessed with dot notation or bracket notation
- Objects can contain functions (called methods)
- Objects are passed by reference

**Why important:** Objects represent real-world entities and organize related data and functionality together.

```javascript
// Creating objects
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true,
    hobbies: ["reading", "swimming", "coding"]
};

// Accessing properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation (useful for dynamic keys)

// Adding/modifying properties
person.email = "john@example.com"; // Add new property
person.age = 31; // Modify existing property

// Object methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: (a, b) => a - b, // Arrow function as method
    multiply(a, b) { // ES6 shorthand method syntax
        return a * b;
    }
};

// Object with 'this' keyword
let user = {
    firstName: "Alice",
    lastName: "Smith",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return `Hello, I'm ${this.getFullName()}`;
    }
};

// Object destructuring (ES6)
let { name, age, city } = person;
console.log(name, age, city);

// Object methods examples
console.log(calculator.add(5, 3)); // 8
console.log(user.greet()); // "Hello, I'm Alice Smith"

// Useful Object methods
console.log(Object.keys(person)); // Array of property names
console.log(Object.values(person)); // Array of property values
console.log(Object.entries(person)); // Array of [key, value] pairs
```

**Learn More:** [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

### 9. Scope and Hoisting

Understanding how JavaScript handles variable and function declarations.

**Scope Types:**
- **Global Scope**: Variables accessible everywhere
- **Function Scope**: Variables accessible only within function
- **Block Scope**: Variables accessible only within block (let/const)

**Hoisting**: JavaScript moves declarations to the top of their scope.

**Why important:** Understanding scope prevents bugs and helps write cleaner code.

```javascript
// Global scope
var globalVar = "I'm global";
let globalLet = "I'm also global";

function demonstrateScope() {
    // Function scope
    var functionVar = "I'm function scoped";

    if (true) {
        // Block scope
        let blockLet = "I'm block scoped";
        const blockConst = "I'm also block scoped";
        var functionVar2 = "I'm function scoped even though in block";

        console.log(blockLet); // Works
    }

    // console.log(blockLet); // Error: blockLet is not defined
    console.log(functionVar2); // Works - var is function scoped
}

// Hoisting examples
console.log(hoistedVar); // undefined (not error - declaration hoisted)
var hoistedVar = "I'm hoisted";

// console.log(notHoisted); // Error: Cannot access before initialization
let notHoisted = "I'm not hoisted";

// Function hoisting
hoistedFunction(); // Works - function declarations are fully hoisted

function hoistedFunction() {
    console.log("I can be called before declaration");
}

// Function expressions are not hoisted
// notHoistedFunc(); // Error: Cannot access before initialization
const notHoistedFunc = function() {
    console.log("I cannot be called before declaration");
};
```

**Learn More:** [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope) | [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

### 10. ES6+ Modern Features

Modern JavaScript features that make code cleaner and more powerful.

**Key Features:**
- **Template Literals**: String interpolation with backticks
- **Destructuring**: Extract values from arrays/objects
- **Spread/Rest Operators**: Expand or collect elements
- **Default Parameters**: Default values for function parameters
- **Enhanced Object Literals**: Shorthand property and method syntax

**Why important:** These features make JavaScript more expressive and reduce boilerplate code.

```javascript
// Template Literals (ES6)
let name = "Alice";
let age = 25;
let message = `Hello, my name is ${name} and I'm ${age} years old.`;
let multiLine = `This is a
multi-line
string`;

// Destructuring Assignment
// Array destructuring
let colors = ["red", "green", "blue"];
let [primary, secondary, tertiary] = colors;

// Object destructuring
let person = { name: "Bob", age: 30, city: "Boston" };
let { name: personName, age: personAge } = person; // Rename while destructuring

// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Enhanced Object Literals
let x = 10, y = 20;
let point = {
    x, // Shorthand for x: x
    y, // Shorthand for y: y
    display() { // Shorthand for display: function()
        return `(${this.x}, ${this.y})`;
    }
};

console.log(message);
console.log(combined);
console.log(greet()); // Uses defaults
console.log(point.display());
```

**Learn More:** [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) | [MDN - Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) | [MDN - Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### 11. DOM Manipulation

The Document Object Model (DOM) allows JavaScript to interact with HTML elements.

**Key Concepts:**
- DOM represents HTML as a tree of objects
- JavaScript can find, change, add, or delete HTML elements
- Common methods: getElementById, querySelector, createElement
- Properties: innerHTML, textContent, style, classList

**Why important:** DOM manipulation is essential for creating interactive web pages.

```javascript
// Selecting elements
let elementById = document.getElementById('myId');
let elementByClass = document.querySelector('.myClass');
let allElements = document.querySelectorAll('div');

// Changing content
elementById.textContent = 'New text content';
elementById.innerHTML = '<strong>Bold text</strong>';

// Changing styles
elementById.style.color = 'blue';
elementById.style.fontSize = '20px';
elementById.style.backgroundColor = '#f0f0f0';

// Working with classes
elementById.classList.add('newClass');
elementById.classList.remove('oldClass');
elementById.classList.toggle('activeClass');

// Creating and adding elements
let newElement = document.createElement('div');
newElement.textContent = 'I am a new element';
newElement.className = 'dynamicElement';
document.body.appendChild(newElement);

// Removing elements
let elementToRemove = document.querySelector('.removeMe');
if (elementToRemove) {
    elementToRemove.remove();
}

// Getting/setting attributes
elementById.setAttribute('data-value', '123');
let dataValue = elementById.getAttribute('data-value');
```

**Learn More:** [MDN - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) | [MDN - Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) | [MDN - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### 12. Event Handling

Events allow JavaScript to respond to user interactions and browser actions.

**Common Events:**
- **Mouse Events**: click, mouseover, mouseout, mousedown, mouseup
- **Keyboard Events**: keydown, keyup, keypress
- **Form Events**: submit, change, input, focus, blur
- **Window Events**: load, resize, scroll

**Why important:** Events make web pages interactive and responsive to user actions.

```javascript
// Adding event listeners
let button = document.getElementById('myButton');

// Click event
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
});

// Multiple event types
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});

// Form events
let form = document.getElementById('myForm');
let input = document.getElementById('myInput');

input.addEventListener('input', function(event) {
    console.log('Input value:', event.target.value);
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log('Form submitted!');
});

// Event delegation (handling events on parent element)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dynamicButton')) {
        console.log('Dynamic button clicked!');
    }
});
```

**Learn More:** [MDN - Events](https://developer.mozilla.org/en-US/docs/Web/Events) | [MDN - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### 13. JSON (JavaScript Object Notation)

JSON is a lightweight data format used for storing and exchanging data.

**Key Points:**
- JSON is text-based and language-independent
- Similar to JavaScript objects but with stricter syntax
- Keys must be strings in double quotes
- Common methods: JSON.stringify(), JSON.parse()

**Why important:** JSON is the standard format for web APIs and data storage.

```javascript
// JavaScript object
let user = {
    name: "Alice Johnson",
    age: 28,
    email: "alice@example.com",
    isActive: true,
    hobbies: ["reading", "traveling", "photography"],
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02101"
    }
};

// Convert JavaScript object to JSON string
let jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// Convert JSON string back to JavaScript object
let parsedUser = JSON.parse(jsonString);
console.log("Parsed Object:", parsedUser);

// JSON with formatting (for readability)
let formattedJson = JSON.stringify(user, null, 2);
console.log("Formatted JSON:\n", formattedJson);

// Handling JSON parsing errors
let invalidJson = '{"name": "John", "age": 30,}'; // Invalid: trailing comma
try {
    let parsed = JSON.parse(invalidJson);
} catch (error) {
    console.log("JSON parsing error:", error.message);
}

// Working with JSON in real scenarios
// Simulating API response
let apiResponse = '{"users": [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]}';
let data = JSON.parse(apiResponse);
console.log("First user:", data.users[0].name);
```

**Learn More:** [MDN - JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) | [MDN - JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) | [MDN - JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### 14. Fetch API & HTTP Requests

The Fetch API provides a modern way to make HTTP requests to servers and APIs.

**Key Concepts:**
- Fetch returns a Promise
- Common HTTP methods: GET, POST, PUT, DELETE
- Response needs to be parsed (usually .json())
- Always handle errors with try/catch or .catch()

**Why important:** Essential for communicating with servers, loading data, and building dynamic applications.

```javascript
// Basic GET request
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(user => {
        console.log('User name:', user.name);
        console.log('User email:', user.email);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

// POST request with data
let newUser = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
};

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser)
})
.then(response => response.json())
.then(data => {
    console.log('Created user:', data);
})
.catch(error => {
    console.error('Error creating user:', error);
});

// Fetch with different response types
// For text response
fetch('/api/text-data')
    .then(response => response.text())
    .then(text => console.log(text));

// For blob (files, images)
fetch('/api/image.jpg')
    .then(response => response.blob())
    .then(blob => {
        let imageUrl = URL.createObjectURL(blob);
        // Use imageUrl for img src
    });
```

**Learn More:** [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### 15. Promises

Promises handle asynchronous operations and provide a cleaner alternative to callbacks.

**Promise States:**
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Why important:** Promises solve callback hell and make asynchronous code more readable and maintainable.

```javascript
// Creating a Promise
function simulateAsyncOperation(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Operation completed successfully!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 2000);
    });
}

// Using Promises with .then() and .catch()
simulateAsyncOperation(true)
    .then(result => {
        console.log("Success:", result);
        return "Next step data"; // Can chain promises
    })
    .then(data => {
        console.log("Chained result:", data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Promise completed (success or failure)");
    });

// Promise.all() - wait for multiple promises
let promise1 = Promise.resolve("First");
let promise2 = Promise.resolve("Second");
let promise3 = simulateAsyncOperation(true);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("One or more promises failed:", error);
    });

// Promise.race() - first promise to resolve/reject wins
Promise.race([
    simulateAsyncOperation(true),
    new Promise(resolve => setTimeout(() => resolve("Quick result"), 1000))
])
.then(result => {
    console.log("First to complete:", result);
});

// Promise.allSettled() - wait for all, regardless of outcome (ES2020)
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    simulateAsyncOperation(true)
])
.then(results => {
    results.forEach((result, index) => {
        console.log(`Promise ${index}:`, result.status, result.value || result.reason);
    });
});
```

**Learn More:** [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) | [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### 16. Async/Await

Async/await provides a more readable way to work with Promises using synchronous-looking code.

**Key Points:**
- `async` functions always return a Promise
- `await` can only be used inside `async` functions
- `await` pauses execution until Promise resolves
- Use try/catch for error handling

**Why important:** Makes asynchronous code easier to read, write, and debug.

```javascript
// Basic async/await
async function fetchUserData(userId) {
    try {
        console.log("Fetching user data...");

        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let user = await response.json();
        console.log("User fetched:", user.name);
        return user;

    } catch (error) {
        console.error("Error fetching user:", error.message);
        throw error; // Re-throw if needed
    }
}

// Using async function
fetchUserData(1)
    .then(user => {
        console.log("Got user:", user.email);
    })
    .catch(error => {
        console.log("Failed to get user");
    });

// Multiple async operations
async function fetchMultipleUsers() {
    try {
        // Sequential (one after another)
        let user1 = await fetchUserData(1);
        let user2 = await fetchUserData(2);
        console.log("Sequential users:", user1.name, user2.name);

        // Parallel (at the same time)
        let [user3, user4] = await Promise.all([
            fetchUserData(3),
            fetchUserData(4)
        ]);
        console.log("Parallel users:", user3.name, user4.name);

    } catch (error) {
        console.error("Error in fetchMultipleUsers:", error);
    }
}

// Async/await with loops
async function processUsers() {
    let userIds = [1, 2, 3];

    // Sequential processing
    for (let id of userIds) {
        try {
            let user = await fetchUserData(id);
            console.log(`Processed user ${id}: ${user.name}`);
        } catch (error) {
            console.log(`Failed to process user ${id}`);
        }
    }

    // Parallel processing
    let promises = userIds.map(id => fetchUserData(id));
    let users = await Promise.allSettled(promises);
    users.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`User ${userIds[index]}: ${result.value.name}`);
        } else {
            console.log(`User ${userIds[index]}: Failed`);
        }
    });
}

// Call async functions
fetchMultipleUsers();
processUsers();
```

**Learn More:** [MDN - async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) | [MDN - await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### 17. Classes (ES6)

Classes provide a cleaner syntax for creating objects and implementing inheritance.

**Key Concepts:**
- Classes are templates for creating objects
- Constructor method initializes new instances
- Methods are functions defined inside the class
- Inheritance with `extends` keyword
- `super()` calls parent class methods

**Why important:** Classes organize code better and make object-oriented programming more intuitive.

```javascript
// Basic class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    // Getter
    get info() {
        return `${this.name} (${this.age})`;
    }

    // Setter
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
    }

    get age() {
        return this._age;
    }

    // Static method (called on class, not instance)
    static compareAges(person1, person2) {
        return person1.age - person2.age;
    }
}

// Creating instances
let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

console.log(alice.greet());
console.log(alice.info);
console.log(Person.compareAges(alice, bob)); // -5

// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // Call parent constructor
        this.major = major;
    }

    // Override parent method
    greet() {
        return `${super.greet()} I'm studying ${this.major}.`;
    }

    // New method specific to Student
    study() {
        return `${this.name} is studying ${this.major}.`;
    }
}

let student = new Student("Charlie", 20, "Computer Science");
console.log(student.greet());
console.log(student.study());

// Private fields (ES2022)
class BankAccount {
    #balance = 0; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }

    // Private method
    #validateAmount(amount) {
        return amount > 0;
    }
}

let account = new BankAccount(100);
console.log(account.deposit(50)); // 150
// console.log(account.#balance); // Error: Private field
```

**Learn More:** [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) | [MDN - Class Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

### 18. Error Handling

Proper error handling makes applications robust and user-friendly.

**Key Concepts:**
- `try...catch...finally` blocks
- Throwing custom errors
- Error types and properties
- Async error handling

**Why important:** Prevents applications from crashing and provides better user experience.

```javascript
// Basic try...catch
try {
    let result = riskyOperation();
    console.log("Success:", result);
} catch (error) {
    console.error("Error occurred:", error.message);
} finally {
    console.log("This always runs");
}

function riskyOperation() {
    let random = Math.random();
    if (random < 0.5) {
        throw new Error("Random failure occurred!");
    }
    return "Operation successful";
}

// Different error types
try {
    JSON.parse("invalid json");
} catch (error) {
    console.log("Error name:", error.name); // SyntaxError
    console.log("Error message:", error.message);
    console.log("Error stack:", error.stack);
}

// Custom errors
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
    if (user.age < 0) {
        throw new ValidationError("Age must be positive", "age");
    }
}

try {
    validateUser({ name: "", email: "test@example.com", age: -5 });
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation error in ${error.field}: ${error.message}`);
    } else {
        console.log("Unexpected error:", error);
    }
}

// Async error handling
async function fetchWithErrorHandling() {
    try {
        let response = await fetch('https://api.example.com/data');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        let data = await response.json();
        return data;

    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Network error:", error.message);
        } else {
            console.error("API error:", error.message);
        }
        throw error; // Re-throw if needed
    }
}
```

**Learn More:** [MDN - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements) | [MDN - Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
