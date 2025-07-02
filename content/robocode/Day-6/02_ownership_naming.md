---
title: "3 - Ownership & Naming"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Let's explore **3 - Ownership & Naming** 🤖

# 🧠 Code Ownership

Good code is organized code. Give each method a **single job**. When every method clearly owns its task, bugs are easier to track down and your code is easier to read.

```java
// ❌ Don't do too much in one method
public void onScannedBot(ScannedBotEvent e) {
    fire(2);
    back(100);
    turnLeft(90);
}

// ✅ Break it up
public void onScannedBot(ScannedBotEvent e) {
    double direction = e.getDirection();

    attackEnemy(direction);
    retreatFromEnemy(direction);
}

private void attackEnemy(double direction) {
    fire(2);
}

private void retreatFromEnemy(double direction) {
    back(100);
    turnLeft(90);
}
```

> Each method has a clear, focused job.

---

## 🔁 Sharing Information Between Methods

You can pass **values between methods using parameters**. This helps keep your logic clean and avoids using global state unless necessary.

```java
public void onScannedBot(ScannedBotEvent e) {
    double enemy_x = e.getX();
    double enemy_y = e.getY();

    aimAt(enemy_x, enemy_y);
}

private void aimAt(double x, double y) {
    // Use x and y to point the gun or radar
}
```

> Pass only the values the function needs.

---

# ✍️ Meaningful Names

Use **camelCase** for method names, and **snake\_case** for variables.

```java
// camelCase for methods
private void turnToEnemy() {
    // ...
}

// snake_case for variables
double enemy_distance = 180;
int bullet_count = 3;
```

> Your code should be readable like a story.

---

## Navigation

⬅️ [Back: Helper Methods](/robocode/Day-6/01_helper_methods)
➡️ [Next: Day 7](/robocode/Day-7/index)
