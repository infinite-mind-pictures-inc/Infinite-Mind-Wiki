---
title: "2 - Movement Patterns"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

The `set*` movement methods like `setTurnLeft`, `setTurnRight`, `setForward`, and `setBack` queue actions to run on the next turn. Call them from your `run()` loop or an event handler such as `onScannedRobot` so your bot can turn and move in the same tick.

> Smart movement keeps your bot alive.

Try mixing circles and zigzags to dodge bullets:

```java
public void onScannedRobot(ScannedRobotEvent e) {
    setTurnRight(e.getBearing() + 90);
    if (Math.random() > 0.5) {
        setForward(150);
    } else {
        setBack(150);
    }
}
```

Changing direction unpredictably makes your tank harder to hit. Combine this with wall smoothing from earlier lessons.
