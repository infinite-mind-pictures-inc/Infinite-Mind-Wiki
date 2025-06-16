---
title: "2 - Data Type Examples"
tags: ["robocode", "tutorial", "hands-on", "cs", "beginner"]
---

# Examples with Numbers and Strings

This page shows how common Java datatypes behave. We'll look at integers, doubles, characters and strings. Boolean logic is saved for the conditions lesson.

## Integers (`int`)

```java
int a = 5;
int b = 2;

int sum = a + b;       // 7
int diff = a - b;      // 3
int product = a * b;   // 10
int quotient = a / b;  // 2
int remainder = a % b; // 1
```

## Decimal numbers (`double`)

```java
double x = 4.5;
double y = 1.2;

double result = x * y + 3; // 8.4
```

## Characters (`char`)

```java
char letter = 'A';
char next = (char)(letter + 1); // 'B'
```

## Strings

Strings are text sequences. You join them using the `+` operator.

```java
String greeting = "Hello";
String name = "Robo";
String message = greeting + " " + name + "!"; // "Hello Robo!"

String scoreText = "Score: " + 10; // "Score: 10"
```

---

## Navigation

⬅️ [Back: Variables](/robocode/Day-3/00_variables_and_datatypes)
➡️ [Next: Conditions](/robocode/Day-4/)
