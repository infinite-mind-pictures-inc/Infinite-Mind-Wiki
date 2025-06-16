---
title: "2 - ScannedRobotEvent"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

# Working with ScannedRobotEvent

`ScannedRobotEvent` is fired whenever your radar detects another robot. The event object includes information like distance and bearing which you can use to decide how to react.

```java
public void onScannedRobot(ScannedRobotEvent e) {
    System.out.println("Enemy at distance: " + e.getDistance());
    if (e.getDistance() < 200) {
        fire(3);        // strong shot at close range
    } else {
        fire(1);        // weaker shot to save energy
    }
}
```

Printing the distance helps you understand how often your robot sees an opponent and whether your firing logic makes sense.

---

## Navigation

⬅️ [Back: System.out.println for Debugging](/robocode/Day-4/00_system_out_debugging)
➡️ [Next: HitByBulletEvent](/robocode/Day-4/02_hit_by_bullet_event)
