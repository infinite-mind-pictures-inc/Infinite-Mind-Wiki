---
title: "5 - HitWallEvent"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

## 5 – Bounce Off the Walls

When your robot collides with the arena boundary, the `onHitWall` method runs.

### What happens?

- Robocode alerts your bot that it hit a wall.
- We'll turn around and drive away to stay in the fight.

### Code

```java
@Override
public void onHitWall(HitWallEvent botHitWallEvent) {
    // 1. Turn 180° away from the wall
    turnRight(180);
    // 2. Move forward to escape
    forward(100);
}
```

### Parameters

- `botHitWallEvent` – event details from the game.

### Why it works

- Turning around keeps your bot from getting stuck.
- Moving forward puts space between you and the wall.

## Navigation

⬅️ [Back: HitByBulletEvent](/robocode/Day-4/03_hit_by_bullet_event)
➡️ [Next: Day 5](/robocode/Day-5/index)
