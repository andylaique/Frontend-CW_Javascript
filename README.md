# Frontend CW — JavaScript Fundamentals

A collection of **JavaScript programming exercises** covering fundamental programming concepts such as functions, loops, variables, arithmetic operations, string handling, and console output.

This repository was created as coursework and practice for building a stronger foundation in **JavaScript programming and problem-solving**.

## Overview

The repository contains **15 numbered JavaScript exercises**, organized as individual `.js` files:

```text
1.js
2.js
3.js
...
15.js
```

Each file focuses on a small programming problem, making the repository useful for practicing JavaScript syntax and fundamental programming logic independently.

For example, `1.js` implements a simple **Greeting Machine** that accepts a number and prints `"Hello"` that many times.

Other exercises work with concepts such as loops, arithmetic calculations, and functions. For example, `10.js` calculates and prints the square of each number from `1` through a supplied value, while `15.js` generates a multiplication table.

## Exercises

| File    | Focus                                                 |
| ------- | ----------------------------------------------------- |
| `1.js`  | Functions, parameters, loops, and string output       |
| `2.js`  | JavaScript fundamentals                               |
| `3.js`  | JavaScript fundamentals                               |
| `4.js`  | JavaScript fundamentals                               |
| `5.js`  | JavaScript fundamentals                               |
| `6.js`  | JavaScript fundamentals                               |
| `7.js`  | JavaScript fundamentals                               |
| `8.js`  | JavaScript fundamentals                               |
| `9.js`  | JavaScript fundamentals                               |
| `10.js` | Loops, arithmetic, functions, and square calculations |
| `11.js` | JavaScript fundamentals                               |
| `12.js` | JavaScript fundamentals                               |
| `13.js` | JavaScript fundamentals                               |
| `14.js` | JavaScript fundamentals                               |
| `15.js` | Functions, loops, multiplication tables               |

> The individual exercise files are intentionally small and independent, making it easy to inspect and run them separately.

## 🛠️ Concepts Practiced

The exercises provide practice with core JavaScript concepts including:

* Variables
* Functions
* Function parameters
* `for` loops
* Arithmetic operators
* String values
* Template literals
* Incrementing counters
* Console output
* Basic problem-solving
* Reusable functions

### Example: Function and Loop

The first exercise demonstrates a simple function that accepts a parameter and uses a loop to repeat an operation:

```javascript
function sayHello(n) {
  let a = "Hello";

  for (let i = 1; i <= n; i++) {
    console.log(a);
  }
}

sayHello(5);
```

This demonstrates how a function can receive input and use iteration to perform a repeated task.

### Example: Calculating Squares

Another exercise uses a loop and arithmetic multiplication to calculate squares:

```javascript
function printSquare(n) {
  let b = 0;

  for (let i = 1; i <= n; i++) {
    b = i * i;
    console.log(b);
  }
}

printSquare(5);
```

This combines functions, loops, variables, and arithmetic operations.

### Example: Multiplication Table

The final exercise demonstrates a reusable function with a loop and template literals:

```javascript
function timesTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} × ${i} = ${n * i}`);
  }
}

console.log(timesTable(7));
```

This provides practice with iteration, multiplication, template literals, and formatted console output.

## Project Structure

```text
Frontend-CW_Javascript/
│
├── 1.js
├── 2.js
├── 3.js
├── 4.js
├── 5.js
├── 6.js
├── 7.js
├── 8.js
├── 9.js
├── 10.js
├── 11.js
├── 12.js
├── 13.js
├── 14.js
├── 15.js
│
└── README.md
```

The repository currently contains the 15 JavaScript exercise files and a README. GitHub lists the repository as public and shows two commits.

## 🚀 Getting Started

### Prerequisites

Install **Node.js** on your computer.

You can verify your installation with:

```bash
node --version
```

### Clone the Repository

```bash
git clone https://github.com/andylaique/Frontend-CW_Javascript.git
cd Frontend-CW_Javascript
```

### Run an Exercise

Each exercise can be executed independently with Node.js.

For example:

```bash
node 1.js
```

Or:

```bash
node 10.js
```

```bash
node 15.js
```

The results are printed directly to the terminal using `console.log()`.

## Learning Objectives

This coursework focuses on developing the ability to:

1. Understand JavaScript syntax.
2. Write and call functions.
3. Work with function parameters.
4. Use loops to repeat operations.
5. Perform arithmetic calculations.
6. Format output using template literals.
7. Break simple problems into executable steps.
8. Run JavaScript programs from the command line.

## Why This Repository Matters

Although the exercises are small, they establish programming concepts that are used in larger JavaScript applications.

Understanding functions, loops, variables, calculations, and control flow provides the foundation needed before moving into areas such as:

* DOM manipulation
* Event-driven programming
* Frontend application development
* React
* Next.js
* API integration
* Asynchronous JavaScript
* Testing

## Possible Extensions

Potential improvements to this coursework could include:

* Adding descriptive filenames instead of numbered files
* Adding comments explaining each solution
* Adding automated tests
* Adding expected output for each exercise
* Adding browser-based examples
* Adding DOM manipulation exercises
* Adding array and object exercises
* Adding asynchronous JavaScript exercises
* Adding a small frontend application that combines the concepts

These are potential extensions and are **not currently represented as implemented features in the repository**.

## Author

**Andy Laique**

Software Engineer | AI/ML | Data & Backend

GitHub: https://github.com/andylaique
