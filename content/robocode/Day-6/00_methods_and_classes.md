---
title: "1 - Methods and Classes"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Diving into **1 - Methods and Classes** 🤖

# Why Use Methods?

Methods package related statements so you can call them whenever you need. This keeps `run()` clean and focused.

```java
public void run() {
    initialize();
    while (true) {
        scanAndFire();
    }
}

private void initialize() {
    setAdjustGunForRobotTurn(true);
}
```

Classes group both data and behavior. Every robot you create extends `AdvancedRobot` and defines its own methods.

```java
public class HelperBot extends AdvancedRobot {
    // run() and event handlers live here
}
```

---

## Navigation

⬅️ [Back: Reactionary Logic](/robocode/Day-5/04_reactionary_logic)
➡️ [Next: Helper Methods](/robocode/Day-6/01_helper_methods)
