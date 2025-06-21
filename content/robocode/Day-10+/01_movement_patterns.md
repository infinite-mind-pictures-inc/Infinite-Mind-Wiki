---
title: "2 - Movement Patterns"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Smart movement keeps your bot alive.

Try mixing circles and zigzags to dodge bullets:

```java
public void onScannedRobot(ScannedRobotEvent e) {
    setTurnRight(e.getBearing() + 90);
    if (Math.random() > 0.5) {
        setAhead(150);
    } else {
        setBack(150);
    }
}
```

Changing direction unpredictably makes your tank harder to hit. Combine this with wall smoothing from earlier lessons.
