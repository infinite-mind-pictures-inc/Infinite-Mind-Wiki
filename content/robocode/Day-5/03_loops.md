---
title: "4 - Loops"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

# Repeating Actions with Loops

A `while` loop controls your robot's main cycle, keeping it active throughout the match.

```java
public void run() {
    while (true) {
        scan();
        ahead(50);
    }
}
```

Use a `for` loop for patterns, like turning the gun a set number of times:

```java
for (int i = 0; i < 4; i++) {
    turnGunRight(90);
}
```

Loops allow complex movement and scanning routines.

---

## Navigation

⬅️ [Back: Truth Tables](/robocode/Day-5/02_truth_tables)
➡️ [Next: Reactionary Logic](/robocode/Day-5/04_reactionary_logic)
