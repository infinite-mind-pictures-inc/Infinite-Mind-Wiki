---
title: "6 - Variable Scope"
tags:
  - robocode
  - tutorial
  - cs
  - intermediate
---

> Dive into **6 - Variable Scope** 🧠

# 🎯 Knowing Where Variables Live

**Scope** determines where a variable can be used in your code. In Java, curly braces `{ }` create a new scope.

---

## 🧍‍♂️ Method and Class Scope

Variables declared **outside** of methods belong to the whole robot class and can be used anywhere inside it.

```java
public class MyBot extends Robot {
    private int moveCount = 0;  // class scope

    public void run() {
        moveCount++;  // accessible here
    }
}
```

> `moveCount` is available in every method of the class.

---

## 📦 Block Scope

Variables declared **inside** a method or block only exist there.

```java
public void run() {
    int scans = 0;  // method scope

    if (getEnergy() > 50) {
        double power = 2;  // block scope
        fire(power);
    }

    // power is no longer accessible here
}
```

> `power` disappears once the `if` block ends.

---

## 🔁 Loop Scope

Variables declared in a loop header or body stay inside the loop.

```java
for (int i = 0; i < 3; i++) {
    double angle = i * 45;
    turnRight(angle);
}

// i and angle are out of scope here
```

> Use loop variables when you only need them during iteration.

---

## ✅ Why Scope Matters

- Prevents name conflicts
- Frees memory when variables go out of scope
- Keeps code organized and predictable

---

## Navigation

⬅️ [Back: Reactionary Logic](/robocode/Day-6/04_reactionary_logic)
➡️ [Next: Day 7](/robocode/Day-7/index)

<iframe src="https://axyl-casc.github.io/WikiMinigames/checklist.html"
  style="width: 100%; height: 100%; min-height: 600px; border: none; border-radius: 8px;"></iframe>
