
# Catalog Assignment: Simplified Shamir's Secret Sharing

## Table of Contents
1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [Solution Approach](#solution-approach)
4. [Steps to Run the Code](#steps-to-run-the-code)
5. [Example Usage](#example-usage)
6. [Future Improvements](#future-improvements)

---

## Introduction

This project involves implementing a simplified version of Shamir's Secret Sharing algorithm to find the constant term (`c`) of a polynomial with a degree determined by the minimum number of required roots. Given encoded polynomial roots in JSON format, the solution decodes and solves the polynomial to retrieve the constant term, representing the "secret" in this context.

## Problem Statement

The polynomial of unknown degree `m` is represented as:
\[ f(x) = a_m x^m + a_{m-1} x^{m-1} + ... + a_1 x + c \]

The task is to solve for the constant term `c` using `k` roots, where `k = m + 1`. Input is provided as JSON files containing:
1. **n** - the total number of roots provided.
2. **k** - the minimum number of roots required to reconstruct the polynomial.

Each root is given as a key-value pair, where:
- The **key** represents `x`.
- The **value** represents `y`, which is encoded in a specified base.

Our objective is to decode these values and apply a method (e.g., Lagrange interpolation) to find `c`.

## Solution Approach

### 1. Input Parsing
   - Parse the JSON input to extract `n`, `k`, and each root (x, y).
   
### 2. Decoding Y Values
   - Convert each `y` value from its specified base to a decimal representation.

### 3. Polynomial Reconstruction
   - Use **Lagrange interpolation** to construct the polynomial from the decoded roots.
   - Solve the polynomial to find the constant term `c`.

### 4. Output the Secret
   - Print the constant term `c` for each test case.

## Steps to Run the Code

### Prerequisites
Ensure you have a compatible environment (e.g., Java, C++, etc., since Python is not allowed).

### Instructions
1. **Clone the Repository** (or copy files to your local environment):
   ```bash
   git clone <repository-url>
   ```
2. **Compile and Run**:
   - Adjust for your language, e.g., for C++:
     ```bash
     g++ -o secret_calculator secret_calculator.cpp
     ./secret_calculator
     ```

3. **Provide JSON Test Files**:
   - Place your test cases in the same directory, or specify the path in the code.

4. **Run the Program**:
   - Execute the program and check the output for `c`.

## Example Usage

### Input
```json
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

### Output
```
The secret constant term (c) is: <calculated value>
```

## Future Improvements

- **Error Handling**: Add validation for input formats and handle incorrect bases.
- **Optimization**: Implement alternative polynomial-solving techniques for efficiency.
- **Testing Framework**: Create a suite of automated tests for different scenarios.

---

This README provides a comprehensive guide to understanding, running, and potentially improving the code for solving this assignment. Good luck!
