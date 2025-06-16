---
title: "5 - Reactionary Logic"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

# Reacting to Battle Input

Robocode battles are dynamic. Combine loops and conditionals to adjust behavior in real time.

```java
public void onScannedRobot(ScannedRobotEvent e) {
    if (e.getDistance() < 150) {
        fire(3);
    } else {
        fire(1);
    }
}
```

In `run()` you might spin the radar continuously:

```java
public void run() {
    while (true) {
        turnRadarRight(360);
    }
}
```

This pattern lets your robot respond immediately when it detects an opponent.

---

## Navigation

⬅️ [Back: Loops](/robocode/Day-5/03_loops)
➡️ [Next: Day 6](/robocode/Day-6/index)
