---
title: "2 - If Statements"
tags:
  - robocode
  - tutorial
  - cs
  - intermediate
---

> Curious about **2 - If Statements** 😎

# 🧠 Making Decisions with `if` Statements

In Robocode, `if` statements help your bot make smart decisions. You can use `if`, `else if`, and `else` to steer how your bot acts in different battle situations.

---

## ✅ `if` by itself

Use a single `if` when there's one thing you want to check.

```java
if (getEnergy() < 10) {
    back(100);  // run away when energy is low
}
```

> If the bot's energy is below 10, it runs away.

---

## 🔀 `if` and `else`

If there's a choice between two paths, use `if` and `else`:

```java
if (getGunHeat() == 0) {
    fire(1);  // Gun is ready, fire!
} else {
    forward(20);  // Otherwise, move forward instead
}
```

> This means "If I can shoot, shoot. Otherwise, advance."

---

## 🧩 `if`, `else if`, and `else`

Use `else if` to check more than one possibility:

```java
if (getEnergy() < 20) {
    back(50);
} else if (getGunHeat() == 0 && getEnemyCount() > 1) {
    fire(3);  // Fire stronger if there are multiple bots
} else {
    forward(30);
}
```

> This lets you react to different situations based on energy, gun heat, and number of opponents.

---

## 🎯 Example: Checking opponent position

You can remember opponent data from the last `ScannedBotEvent`:

```java
private double lastOpponentDistance = 1000;

@Override
public void onScannedBot(ScannedBotEvent e) {
    lastOpponentDistance = e.getX();  // Example use: store opponent's x-pos for logic

    if (lastOpponentDistance < 200) {
        fire(2);
    } else {
        turnGunRight(20);  // Sweep gun if opponent is far
    }
}
```

> You’ll need to track opponent data manually in your bot.

---

## 🚨 Defensive Mode Example

```java
if (getHitWallEvent() != null) {
    back(50);
} else if (getHitByBulletEvent() != null) {
    turnLeft(45);
    forward(100);
}
```

> Your bot turns away and moves if it's hit.

---

## 🕵️‍♂️ Checking Gun Heat

```java
if (getGunHeat() == 0) {
    fire(1);
}
```

> Never try to fire if your gun is too hot.

---

## Tips

- Always start with the most **important** check first.
- Use `{}` to group multiple lines of code.
- Keep conditions simple and readable.

---

## Navigation

⬅️ [Back: Boolean Basics](/robocode/Day-6/00_boolean_basics)
➡️ [Next: Conditions & Logic](/robocode/Day-6/02_conditions_and_logic)
