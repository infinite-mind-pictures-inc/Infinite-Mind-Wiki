---
title: "3 - HitByBulletEvent"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Welcome to **4 - Evade When Hit** 🕵️

# 💥 Dodging Bullets with `HitByBulletEvent`

In Robocode, every time an enemy bullet hits you, a special event is triggered: `HitByBulletEvent`. You can use this moment to react — like dodging, logging, or planning revenge.

Let's build a smart reaction system step by step!

---

## 🧠 Step 1: What Is `HitByBulletEvent`?

When you’re hit, this method runs:

```java
public void onHitByBullet(HitByBulletEvent e) {
    // Reaction code here
}
```

The event gives you one key thing:

* `e.getBearing()` → The angle (relative to your bot) from which the bullet came.

---

## 🛞 Step 2: Simple Dodge Strategy

Start with a basic dodge:

```java
@Override
public void onHitByBullet(HitByBulletEvent e) {
    System.out.println("Ouch! Bullet from: " + e.getBearing());
    turnRight(normalizeBearing(e.getBearing() + 90)); // Turn perpendicular to the bullet
    ahead(100); // Move to dodge
}
```

This turns your robot 90° from where the bullet came — a common trick to avoid follow-up shots.

### 🎯 Why 90 Degrees?

Enemy bots often keep firing in the same direction. So if you got hit, don’t stay in that line!

---

## 🔁 Step 3: Add Variation

Enemies may adapt to predictable dodges. Add randomness:

```java
@Override
public void onHitByBullet(HitByBulletEvent e) {
    double direction = Math.random() > 0.5 ? 1 : -1; // Flip a coin
    turnRight(normalizeBearing(e.getBearing() + (90 * direction)));
    ahead(50 + Math.random() * 100); // Vary the distance
}
```

Now you’re harder to hit twice in a row! 🤖💨

---

## 🧰 Utility: Normalize Angle

This keeps angles between -180° and 180°:

```java
private double normalizeBearing(double angle) {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
}
```

---

## 🧪 Try It Yourself

1. Add the method above to your robot.
2. Run a battle against a stationary bot.
3. Watch your bot dodge each time it's hit!

---

## 🧭 Next Steps

You can combine this with `ScannedBotEvent` to make smarter dodging decisions:

* Only dodge if the enemy is close.
* Track where most hits come from.

Want to add a bullet log or heat map later? You’re already halfway there! 🧠✨

---

[Minigame](/robocode/Day-4/04-minigame)

## Navigation

⬅️ [Back: ScannedRobotEvent](/robocode/Day-4/01_scanned_robot_event)
➡️ [Next: Boolean Basics](/robocode/Day-5/00_boolean_basics)
