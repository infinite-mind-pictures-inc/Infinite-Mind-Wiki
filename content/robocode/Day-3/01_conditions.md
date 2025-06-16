---
title: "2 - Conditions"
tags: ["robocode", "tutorial", "hands-on", "cs", "beginner"]
---
# Using Conditions

Conditions let your robot react to the world around it. In Java you use the `if` statement to run code only when a condition is true.

## Basic `if` Statement

```java
if (energy < 50) {
    retreat();
}
```

The expression inside the parentheses is checked each time this code runs. If `energy` is below `50`, the robot calls `retreat()`.

## `if` / `else`

Add an `else` block to handle the opposite case:

```java
if (enemyDistance < 100) {
    fire(3);
} else {
    ahead(50);
}
```

Your robot fires when an enemy is close; otherwise it moves forward.

---

## Navigation

⬅️ [Back: Variables and Datatypes](/robocode/Day-2/00_variables_and_datatypes)
➡️ [Next: Day 3](/robocode/Day-3/00_robocode_intro)
