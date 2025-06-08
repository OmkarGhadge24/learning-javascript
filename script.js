// ========================================
// LEARNING JAVASCRIPT
// ========================================
console.log("Welcome to Learning JavaScript!");

// ========================================
// 1. VARIABLES
// ========================================
console.log("\n1. VARIABLES");
console.log("Variables are containers that store data values");

// var - function scoped, can be redeclared
var oldWay = "I'm using var (old way)";
console.log("var example:", oldWay);

// let - block scoped, cannot be redeclared
let modernWay = "I'm using let (modern way)";
console.log("let example:", modernWay);

// const - block scoped, cannot be reassigned
const constantValue = "I'm using const (cannot change)";
console.log("const example:", constantValue);

// ========================================
// 2. DATA TYPES
// ========================================
console.log("\n2. DATA TYPES");
console.log("JavaScript has several built-in data types");

// String
let myString = "Hello, World!";
console.log("String:", myString, "| Type:", typeof myString);

// Number
let myNumber = 42;
console.log("Number:", myNumber, "| Type:", typeof myNumber);

// Boolean
let myBoolean = true;
console.log("Boolean:", myBoolean, "| Type:", typeof myBoolean);

// Null
let myNull = null;
console.log("Null:", myNull, "| Type:", typeof myNull);

// Undefined
let myUndefined;
console.log("Undefined:", myUndefined, "| Type:", typeof myUndefined);

// ========================================
// 3. OPERATORS
// ========================================
console.log("\n3. OPERATORS");
console.log("Operators perform operations on variables and values");

// Arithmetic Operators
let a = 10, b = 3;
console.log("Arithmetic Operators:");
console.log(`${a} + ${b} =`, a + b);
console.log(`${a} - ${b} =`, a - b);
console.log(`${a} * ${b} =`, a * b);
console.log(`${a} / ${b} =`, a / b);
console.log(`${a} % ${b} =`, a % b); // Modulus (remainder)

// Assignment Operators
let x = 5;
console.log("Assignment Operators:");
console.log("x =", x);
x += 3; // x = x + 3
console.log("x += 3:", x);
x *= 2; // x = x * 2
console.log("x *= 2:", x);

// Comparison Operators
console.log("Comparison Operators:");
console.log("5 == '5':", 5 == '5');   // Loose equality
console.log("5 === '5':", 5 === '5'); // Strict equality
console.log("10 > 5:", 10 > 5);
console.log("3 <= 3:", 3 <= 3);

// Logical Operators
console.log("Logical Operators:");
console.log("true && false:", true && false); // AND
console.log("true || false:", true || false); // OR
console.log("!true:", !true); // NOT

// ========================================
// 4. CONDITIONALS
// ========================================
console.log("\n4. CONDITIONALS");
console.log("Conditionals execute code based on conditions");

// if-else statement
let age = 18;
if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a minor!");
}

// if-else if-else
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}

// ========================================
// 5. LOOPS
// ========================================
console.log("\n5. LOOPS");
console.log("Loops repeat code multiple times");

// for loop
console.log("For loop (counting 1 to 5):");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// while loop
console.log("While loop (countdown from 3):");
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// do-while loop
console.log("Do-while loop (runs at least once):");
let num = 0;
do {
    console.log("Number:", num);
    num++;
} while (num < 3);

// ========================================
// 6. FUNCTIONS
// ========================================
console.log("\n6. FUNCTIONS");
console.log("Functions are reusable blocks of code");

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function Declaration:", greet("Alice"));

// Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Function Expression:", multiply(4, 5));

// Arrow Function (ES6)
const divide = (a, b) => a / b;
console.log("Arrow Function:", divide(10, 2));

// Arrow Function with multiple statements
const calculateArea = (length, width) => {
    const area = length * width;
    return `Area: ${area} square units`;
};
console.log("Arrow Function (multi-line):", calculateArea(5, 3));

// ========================================
// 7. ARRAYS
// ========================================
console.log("\n7. ARRAYS");
console.log("Arrays store multiple values in a single variable");

// Array Declaration
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);

// Array Methods
console.log("Array Methods:");

// push() - adds element to end
fruits.push("grape");
console.log("After push('grape'):", fruits);

// pop() - removes last element
let removed = fruits.pop();
console.log("Popped element:", removed);
console.log("After pop():", fruits);

// map() - creates new array with transformed elements
let doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

// filter() - creates new array with elements that pass a test
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce() - reduces array to single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

// ========================================
// 8. OBJECTS
// ========================================
console.log("\n8. OBJECTS");
console.log("Objects store data in key-value pairs");

// Object Declaration
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isStudent: false
};

console.log("Person object:", person);

// Accessing Properties
console.log("Dot notation - Name:", person.name);
console.log("Bracket notation - Age:", person["age"]);

// Adding Properties
person.email = "john@example.com";
console.log("After adding email:", person);

// Object Methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: (a, b) => a - b, // Arrow function as method
    multiply(a, b) { // ES6 shorthand method
        return a * b;
    }
};

console.log("Calculator methods:");
console.log("Add:", calculator.add(5, 3));
console.log("Subtract:", calculator.subtract(10, 4));
console.log("Multiply:", calculator.multiply(6, 7));

// ========================================
// 9. SCOPE AND HOISTING
// ========================================
console.log("\n9. SCOPE AND HOISTING");
console.log("Understanding how JavaScript handles variable and function declarations");

// Global scope
var globalVar = "I'm global";
let globalLet = "I'm also global";
console.log("Global variables:", globalVar, globalLet);

// Function scope demonstration
function demonstrateScope() {
    var functionVar = "I'm function scoped";
    console.log("Function variable:", functionVar);

    if (true) {
        let blockLet = "I'm block scoped";
        const blockConst = "I'm also block scoped";
        var functionVar2 = "I'm function scoped even though in block";

        console.log("Inside block - blockLet:", blockLet);
        console.log("Inside block - blockConst:", blockConst);
    }

    console.log("Outside block - functionVar2:", functionVar2); // Works - var is function scoped
    // console.log(blockLet); // Would cause error: blockLet is not defined
}

demonstrateScope();

// Hoisting examples
console.log("Hoisted var (before declaration):", hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";
console.log("Hoisted var (after declaration):", hoistedVar);

// Function hoisting
hoistedFunction(); // Works - function declarations are fully hoisted

function hoistedFunction() {
    console.log("I can be called before declaration");
}

// ========================================
// 10. ES6+ MODERN FEATURES
// ========================================
console.log("\n10. ES6+ MODERN FEATURES");
console.log("Modern JavaScript features");

// Template Literals
let firstName = "Jane";
let lastName = "Smith";
let fullName = `${firstName} ${lastName}`;
console.log("Template Literal:", fullName);

// Destructuring Arrays
let colors = ["red", "green", "blue"];
let [primary, secondary, tertiary] = colors;
console.log("Destructured colors:", primary, secondary, tertiary);

// Destructuring Objects
let student = { name: "Alice", grade: "A", subject: "Math" };
let { name: studentName, grade } = student;
console.log("Destructured student:", studentName, grade);

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Spread arrays:", combined);

// Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Rest parameters sum:", sumAll(1, 2, 3, 4, 5));

// Default Parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log("Default params:", greetUser());
console.log("With params:", greetUser("Bob", "Hi"));

// Optional Chaining (?.) - ES2020
const userProfile = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "Boston"
    }
};

const userWithoutAddress = {
    name: "Bob"
};

// Safe property access
console.log("User city:", userProfile.address?.city);
console.log("User without address city:", userWithoutAddress.address?.city);

// Optional method calling
const apiService = {
    getData: function() {
        return "API data";
    }
};

console.log("API method exists:", apiService.getData?.());
console.log("Non-existent method:", apiService.nonExistent?.());

// Nullish Coalescing (??) - ES2020
let username = null;
let defaultName = "Guest";

// ?? only checks for null/undefined, not falsy values
let displayName = username ?? defaultName;
console.log("Display name:", displayName);

// Difference between || and ??
let emptyString = "";
console.log("Using ||:", emptyString || "default"); // "default"
console.log("Using ??:", emptyString ?? "default"); // ""

// ========================================
// 11. DOM MANIPULATION
// ========================================
console.log("\n11. DOM MANIPULATION");
console.log("DOM allows you to interact with HTML elements");

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // getElementById
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');

    if (demoButton && demoOutput) {
        console.log("Found demo elements!");

        // querySelector (more flexible)
        const heading = document.querySelector('h1');
        console.log("Page heading:", heading ? heading.textContent : "Not found");

        // innerHTML vs textContent
        demoOutput.innerHTML = '<em>DOM manipulation works!</em>';
        console.log("Set innerHTML with HTML tags");

        // Change styles
        demoOutput.style.color = '#007bff';
        demoOutput.style.fontWeight = 'bold';
    }
});

// ========================================
// 12. EVENT HANDLING
// ========================================
console.log("\n12. EVENT HANDLING");
console.log("Events respond to user interactions");

// Event Listener Example
document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');

    if (demoButton && demoOutput) {
        // Click Event
        demoButton.addEventListener('click', function() {
            const messages = [
                "JavaScript events are awesome!",
                "You're learning fast!",
                "Keep exploring!",
                "DOM manipulation rocks!"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            demoOutput.textContent = randomMessage;
            console.log("Button clicked! Message:", randomMessage);
        });

        // Mouseover Event
        demoButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            console.log("Mouse over button!");
        });

        // Mouseout Event
        demoButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            console.log("Mouse left button!");
        });
    }
});

// ========================================
// 13. JSON
// ========================================
console.log("\n13. JSON");
console.log("JSON is used for data exchange");

// JavaScript Object
let userData = {
    id: 1,
    username: "coder123",
    email: "coder@example.com",
    preferences: {
        theme: "dark",
        notifications: true
    }
};

// Convert to JSON string
let jsonString = JSON.stringify(userData);
console.log("JSON String:", jsonString);

// Parse JSON string back to object
let parsedData = JSON.parse(jsonString);
console.log("Parsed Object:", parsedData);
console.log("User email:", parsedData.email);

// ========================================
// 14. FETCH API & HTTP REQUESTS
// ========================================
console.log("\n14. FETCH API & HTTP REQUESTS");
console.log("Fetch API makes HTTP requests");

// Example with a public API
async function fetchUserData() {
    try {
        console.log("Fetching user data...");
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        console.log("Fetched user:", userData.name);
        console.log("User email:", userData.email);
        console.log("User website:", userData.website);

    } catch (error) {
        console.log("Fetch error:", error.message);
        console.log("This is normal if you're offline or the API is down");
    }
}

// Call the fetch function
fetchUserData();

// ========================================
// 15. PROMISES
// ========================================
console.log("\n15. PROMISES");
console.log("Promises handle asynchronous operations");

// Creating a Promise
function simulateAsyncOperation(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 1000);
    });
}

// Using Promises with .then() and .catch()
console.log("Starting promise example...");
simulateAsyncOperation(true)
    .then(result => {
        console.log("Promise resolved:", result);
    })
    .catch(error => {
        console.log("Promise rejected:", error);
    });

// Promise.all() - wait for multiple promises
const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    });

// ========================================
// 16. ASYNC/AWAIT
// ========================================
console.log("\n16. ASYNC/AWAIT");
console.log("Async/await makes promises easier to work with");

// Async function
async function demonstrateAsync() {
    try {
        console.log("Starting async operation...");

        // Await a promise
        const result = await simulateAsyncOperation(true);
        console.log("Async result:", result);

        // Multiple awaits
        const data1 = await Promise.resolve("Data 1");
        const data2 = await Promise.resolve("Data 2");
        console.log("Multiple awaits:", data1, data2);

    } catch (error) {
        console.log("Async error:", error);
    }
}

// Call async function
demonstrateAsync();

// ========================================
// 17. CLASSES (ES6)
// ========================================
console.log("\n17. CLASSES (ES6)");
console.log("Classes provide a cleaner syntax for creating objects");

// Basic class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    static compareAges(person1, person2) {
        return person1.age - person2.age;
    }
}

// Creating instances
let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

console.log("Alice greeting:", alice.greet());
console.log("Age comparison:", Person.compareAges(alice, bob));

// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // Call parent constructor
        this.major = major;
    }

    greet() {
        return `${super.greet()} I'm studying ${this.major}.`;
    }

    study() {
        return `${this.name} is studying ${this.major}.`;
    }
}

let charlie = new Student("Charlie", 20, "Computer Science");
console.log("Student greeting:", charlie.greet());
console.log("Student studying:", charlie.study());

// ========================================
// 18. ERROR HANDLING
// ========================================
console.log("\n18. ERROR HANDLING");
console.log("Proper error handling makes applications robust");

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
}

try {
    validateUser({ name: "", email: "test@example.com" });
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
        console.log("Attempting async operation...");
        let response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        let data = await response.json();
        console.log("Async operation successful:", data.name);
        return data;

    } catch (error) {
        console.error("Async error:", error.message);
        throw error;
    }
}

// Call async error handling example
fetchWithErrorHandling().catch(() => {
    console.log("Handled async error gracefully");
});
