---
title: "1 - Variables and Datatypes"
tags: ["robocode", "tutorial", "hands-on", "cs", "beginner"]
---

> It's time for **1 - Variables and Datatypes** 😀
# Java Basics

Robocode robots are written in Java, so you need a grasp of basic syntax.

## Declaring Variables

Variables store data. A declaration lists the *type* followed by the variable name:

```java
int energy = 100;       // whole number
double speed = 8.0;     // decimal number
String name = "Robo";   // text
```

The first word is the **datatype** telling Java what kind of value to store. The keywords `int`, `double` and `String` are built into the language.

## Common Datatypes

| Type    | Example           | Description                      |
|---------|------------------|----------------------------------|
| `int`   | `int hits = 0;`   | Whole numbers
| `double`| `double x = 3.5;` | Decimal numbers
| `boolean` | `boolean alive = true;` | `true` or `false`
| `char`  | `char grade = 'A';` | Single character
| `String`| `String title = "Tank";` | Sequence of characters

## Keywords in Methods and Classes

When you see a Java method like:

```java
public static void run() {
    // logic here
}
```

- `public` means other classes can call this method.
- `static` associates the method with the class rather than a specific object.
- `void` means it does not return a value.

These keywords appear throughout Java code, including your robot classes.

## Moving a Tank

Inside your robot class you can use variables to control movement:

```java
public void run() {
    int step = 100;      // how far to move
    double angle = 90.0; // how much to turn

    ahead(step);         // move forward
    turnRight(angle);    // rotate the tank
}
```

This program moves the tank forward and then turns right. Understanding variables and datatypes lets you tweak those values to create more complex strategies.

---

## Navigation

➡️ [Next: Examples](/robocode/Day-3/01_datatype_examples)
