---
title: "1 - try/catch Basics"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Let's explore **1 - try/catch Basics** 🤖

Java lets you handle errors using `try` and `catch`. This keeps your robot from crashing when something unexpected happens.

## Basic Structure

```java
try {
    // risky code goes here
} catch (Exception e) {
    out.println("Oops! " + e.getMessage());
}
```

Use `try/catch` when you read files, work with user input, or call methods that might throw exceptions.

### When to Use

- **Setup code** – loading resources like images or sound
- **Math operations** – guarding against divide-by-zero errors
- **API calls** – catching network or parsing issues

Handling errors gracefully shows kindness to your future self and teammates.

## Navigation

⬅️ [Back: Day 6](/robocode/Day-6/index)
➡️ [Next: Debugging with Patience](/robocode/Day-7/01_basic_debugging)
