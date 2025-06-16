---
title: "3 - HitByBulletEvent"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

# Handling HitByBulletEvent

`HitByBulletEvent` is triggered when an enemy bullet strikes your robot. The event tells you the bullet's bearing so you can react or log what happened.

```java
public void onHitByBullet(HitByBulletEvent e) {
    System.out.println("Bullet from bearing: " + e.getBearing());
    back(50);              // move away from fire
}
```

Debug prints make it clear how often you are hit and from which direction, helping you adjust your strategy.

---

## Navigation

⬅️ [Back: ScannedRobotEvent](/robocode/Day-4/01_scanned_robot_event)
➡️ [Next: Boolean Basics](/robocode/Day-5/00_boolean_basics)
