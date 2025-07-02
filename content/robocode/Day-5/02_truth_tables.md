---
title: "3 - Truth Tables"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Buckle up for **3 - Truth Tables** 😎

# 📊 Building Truth Tables

Truth tables show how boolean expressions evaluate. They help predict what an `if` statement will do. This is useful when you're combining checks like energy level, enemy count, or gun readiness.

---

## ✅ Table Example

| A (Gun Ready?) | B (Low Energy?) | `A && B` | `A || B` |
|----------------|------------------|----------|----------|
| `true`         | `true`           | `true`   | `true`   |
| `true`         | `false`          | `false`  | `true`   |
| `false`        | `true`           | `false`  | `true`   |
| `false`        | `false`          | `false`  | `false`  |

---

## 🧠 Real-World Robocode Check

```java
boolean gunReady = getGunHeat() == 0;
boolean lowEnergy = getEnergy() < 20;

if (gunReady && !lowEnergy) {
    fire(2);  // Only shoot if gun is ready AND we have energy
}
```

---

## 💡 Notes

* `&&` means **and** — both sides must be true.
* `||` means **or** — either side can be true.
* `!` means **not** — flips a boolean value.

Understanding truth tables will help you build smarter conditions and avoid mistakes like always firing even when your bot is in danger.

---

## Navigation

⬅️ [Back: If Statements](/robocode/Day-5/01_if_statements)
➡️ [Next: Loops](/robocode/Day-5/03_loops)
