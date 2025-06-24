---
title: "1 - Hit Reaction Plan"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Visual planning helps you react quickly when your robot is hit. Grab a pen and sketch first!

# 🧠 AI Strategy on Paper: Draw Before You Code

Before you write a single line of code, it helps to map out what your robot will do using **flowcharts** or **decision diagrams**. This gives you a clear plan to follow — and makes debugging easier later.

---

## 🔁 Flowchart: When You're Hit

This diagram shows how your bot might react to being hit by a bullet:

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

* If energy is low, the bot retreats and zigzags to avoid more hits.
* If energy is high, it dodges and counterattacks.

---

## ✍️ Practice Sketching

Try drawing your own plan for:

* Scanning and engaging a new robot
* Moving toward the center
* Avoiding walls

Use boxes for actions, diamonds for decisions, and arrows for flow. Start with events like `onScannedBot`, `onHitWall`, or `onHitByBullet`.

---

## 🎯 Strategy First, Code Second

If your robot feels random, it’s probably missing a plan. Start with a flowchart that shows how your bot should respond to:

* Scanning a robot
* Taking a hit
* Running out of energy
* Being too close to a wall

A clear strategy leads to cleaner code.

---

## 🧪 Try This Challenge

Design a flowchart for:

* Avoiding enemy fire while scanning
* Charging toward low-energy enemies

Once you're done, turn it into methods and `if` statements in your code.

---

## Navigation

⬅️ [Back: Basic Debugging](/robocode/Day-7/01_basic_debugging)
➡️ [Next: Day 8](/robocode/Day-8/survival_strategies)
