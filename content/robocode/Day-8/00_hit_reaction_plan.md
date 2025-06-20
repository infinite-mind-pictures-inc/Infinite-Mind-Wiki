---
title: "1 - Hit Reaction Plan"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Visual planning helps you react quickly when your robot is hit. Grab a pen and sketch first!

# Flowchart: When You're Hit

```text
   [HitByBulletEvent]
            |
   +--------+--------+
   | Energy below 30 |
   +---+--------+----+
       |        |
     yes       no
       |        |
  [Retreat] [Turn Perpendicular]
       |        |
  [Zigzag + Scan]   [Fire Back]
```

This simple diagram shows the decision points after your tank takes a hit. Start with energy check, then choose to retreat or counterattack.
