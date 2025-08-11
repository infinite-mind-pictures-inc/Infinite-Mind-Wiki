---
title: "3 - Conditions & Logic"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Buckle up for **3 - Conditions & Logic** 😎

# 📏 Comparing Values

When your bot checks numbers, it uses comparison operators:

- `>` greater than
- `<` less than
- `==` equal to
- `!=` not equal to

These help answer questions like "Is the opponent close?" or "Is my energy low?"

---

## 🔗 Logical Operators

Once you have comparisons, glue them together with logical operators:

- `&&` means **and** – every part must be true
- `||` means **or** – any part can be true
- `!` means **not** – flips true to false and vice versa

Here's a quick example that uses `||`:

```java
boolean lowEnergy = getEnergy() < 20;
boolean gunHot = getGunHeat() > 0;

if (lowEnergy || gunHot) {
    turnRight(90); // Take a breather if tired or the gun is hot
}
```

---

## 🕵️ onScannedBot Example

The `onScannedBot` method runs when your radar spots another bot. We can combine several conditions to decide when to fire:

```java
@Override
public void onScannedBot(ScannedBotEvent e) {
    double distance = Math.hypot(e.getX() - getX(), e.getY() - getY());

    boolean isClose = distance < 150;
    boolean gunReady = getGunHeat() == 0;
    boolean lowEnergy = getEnergy() < 20;

    if (gunReady && !lowEnergy && isClose) {
        fire(3); // Use strong firepower when close
    } else if (gunReady && !lowEnergy && !isClose) {
        fire(2);
    }
}
```

- `distance` uses `Math.hypot` to calculate how far the opponent is.
- `isClose` checks if the opponent is within 150 units.
- `gunReady` verifies the gun has cooled down.
- `lowEnergy` makes sure we save power when health is low.
- The combined `if` uses `&&` and `!` to act only when it's safe.

---

## Navigation

⬅️ [Back: If Statements](/robocode/Day-6/01_if_statements)
➡️ [Next: Loops](/robocode/Day-6/03_loops)
