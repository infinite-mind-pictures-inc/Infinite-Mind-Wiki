---
title: "1 - Hit Reaction Plan"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Visual planning helps you react quickly when your robot is hit. Grab a pen and sketch first!

# 🧠 AI Strategy on Paper: Draw Before You Code

Before you write a single line of code, it helps to map out what your robot will do using **flowcharts** or **decision diagrams**. This gives you a clear plan to follow — and makes debugging easier later.

---

# 🚦 Simple Event Flow – **Robocode Tank Royale** Bot

This kid‑friendly flowchart shows **what happens each game tick**. In Tank Royale the game engine automatically calls the three event methods *first*. If none of them fire, your `run()` code is the **fallback** that keeps your bot moving and scanning.

* **`onScannedBot(ScannedBotEvent e)`** – you spotted an opponent.
* **`onHitByBullet(HitByBulletEvent e)`** – you were hit by a bullet.
* **`onHitWall(HitWallEvent e)`** – you bumped a wall.
* **`run()`** – your main loop; it runs every tick **after** the engine has delivered any events.

---

```text
             [Game Tick]
                   |
                   v
        +-----------------------+
        | Engine Delivers Event |
        +-----------------------+
             /   |     \   \
            /    |      \   \
 [onScannedBot] [onHitByBullet] [onHitWall]
        |               |               |
        v               v               v
  +-------------+  +-------------+   +--------------+
  |  Aim & Fire |  | Low Energy? |   | Back Off &   |
  | (choose P)  |  +----+--------+   | Turn Away    |
  +-------------+      |            +-------+-------+
                       |yes         |
                       v            |
                 +-------------+    |
                 | Retreat &   |    |
                 | Zig‑Zag     |    |
                 +-------------+    |
                       |            |
                      no            |
                       |            |
                       v            |
                 +-------------+    |
                 | Dodge &     |    |
                 | Counter‑Fire |    |
                 +-------------+    |
                       |            |
                       +------------+-----------+
                                     |
                                     v
                        [No Event? ➜  run()]
                                     |
                                     v
                          +-------------------+
                          | Default Action    |
                          | (scan & patrol)   |
                          +-------------------+
                                     |
                                     v
                                 [Next Tick]
```

### How to Read It

1. **Engine Delivers Event** – At the start of every tick the engine checks: Did you scan a bot? Were you hit? Did you hit a wall?
2. **Event Branches** – Only one branch runs per tick:

   * **`onScannedBot`** – Point the gun, decide firepower, shoot.
   * **`onHitByBullet`** – If energy < 30, retreat & zig‑zag; otherwise dodge perpendicular and counter‑fire.
   * **`onHitWall`** – Reverse a bit and turn 90° away from the wall.
3. **`run()` as Fallback** – If **no event** fired, the engine next calls `run()` for this tick. Use it for default scanning, radar sweeps, or patrolling.
4. **Loop** – The process repeats on the next tick.

---

✏️ **Your Task:** Copy this flow on paper, adjust the numbers (retreat distance, firepower, dodge angle) to your liking, and then mirror each box in your Java code. Visual planning keeps your bot’s logic clear and easy to debug!


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
