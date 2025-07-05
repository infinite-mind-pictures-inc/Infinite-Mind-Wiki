---
title: "4 - Loops"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> It's time for **4 - Loops** 😎

# 🔁 Repeating Actions with `while` Loops

A `while` loop lets your robot repeat actions as long as a condition is true — just like an `if` statement that _keeps checking_ over and over.

```java
while (getEnergy() > 50) {
    forward(100);
    back(100);
}
```

> This bot will move back and forth while it has energy above 50.

---

## ♾️ Infinite Loop for Main Behavior

Robocode bots often use an infinite `while (true)` loop for their main logic:

```java
public void run() {
    while (true) {
        scan();
        forward(50);
        turnRight(30);
    }
}
```

> This keeps the bot active for the entire round.

---

## ❗ Be Careful!

If the condition in your `while` loop never becomes false, it can go forever. That’s great for behavior loops, but not for checks that should eventually stop.

```java
while (getGunHeat() > 0) {
    turnGunRight(5);  // Keep turning until gun is cool
}
```

---

## 🧠 Think Like a Loop

- Start with a condition (like an `if`)
- Repeat what's inside `{}` until the condition is false

```java
while (enemyCount > 0) {
    scan();
    fire(2);
    enemyCount--;
}
```

> Looping ends when no enemies are left.

---

## Navigation

⬅️ [Back: Truth Tables](/robocode/Day-6/03_truth_tables)
➡️ [Next: Reactionary Logic](/robocode/Day-6/05_reactionary_logic)
