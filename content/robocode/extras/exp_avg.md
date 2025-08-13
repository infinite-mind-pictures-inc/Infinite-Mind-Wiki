---
title: "Exponential Averaging"
tags:
  - robocode
---

# Exponential Averaging 🧮✨

> **Quick idea:** Exponential averaging is like having a magic memory that *prefers* fresh news but doesn’t totally forget the past. It smooths out jumpy data so your bot can aim better!

---

## 1. Why Do We Need It? 🤔

* In Robocode your radar sees an opponent robot at slightly different angles each tick (game step).
* Those readings can jump around because the opponent moves or because of tiny measurement errors.
* A jumpy red dot on your compass makes aiming messy – your turret might wiggle wildly.
* **Exponential averaging** calms the dot down by blending the newest angle with the earlier average, giving you a smooth, easy‑to‑follow path.

---

## 2. Everyday Analogy 🥤

Imagine stirring chocolate syrup into milk:

* At the start you only see swirls of dark and light.
* Each stir mixes the *new* syrup streaks with what was already blended.
* After several stirs the milk looks evenly chocolaty – the big swirls disappear.

Exponential averaging is like those stirs: each new swirl (new angle) gets mixed in, and the milk (the average) gets smoother every time.

---

## 3. The Magic Formula ✨

```
newAverage = (1 – α) × oldAverage + α × newValue
```

* **α (alpha)** is the *smoothing factor* (a number between **0 and 1**).

  * `α = 0.1` – slow change, very smooth (good when data is noisy).
  * `α = 0.5` – faster change, follows sudden moves quickly.
* **oldAverage** is your previous smooth value.
* **newValue** is the latest reading from the radar.

---

## 4. Step‑by‑Step Example 🧮

| Tick | New Angle (°) | Old Avg (°) | α   | New Avg (°) |
| ---: | ------------: | ----------: | --- | ----------: |
|    1 |        **30** |           – | 0.3 |        30.0 |
|    2 |        **40** |        30.0 | 0.3 |        33.0 |
|    3 |        **35** |        33.0 | 0.3 |        33.6 |
|    4 |        **60** |        33.6 | 0.3 |        41.5 |

> Notice how the average moves toward the new angle but never jumps all the way there.

---

## 5. Tiny Java Snippet for Your Bot 🖥️

```java
// Put this inside your PlayerBot class
private double smoothedAngle = 0;      // start at 0 or first scan
private static final double ALPHA = 0.2; // tweak 0.05–0.5 until it feels right

private void updateSmoothedAngle(double newAngle) {
    smoothedAngle = (1 - ALPHA) * smoothedAngle + ALPHA * newAngle;
}

// Use smoothedAngle instead of raw radar angle to draw your red dot
```

**Where to call it:** in your `onScannedBot(ScannedBotEvent e)` handler right after you read `e.getDirection()` (or bearing).

---

## 6. Choosing a Good Alpha 🎚️

* **Small α (0.05–0.15)** – smoother dot, but reacts slowly if the opponent zig‑zags.
* **Medium α (0.2–0.3)** – good balance for most targets.
* **Large α (0.4–0.6)** – follows quick turns, but the dot may shake more.

> **Try this:** Add a GUI slider so kids can move α during the match and *see* the difference live!

---

## 7. Checkbox Connection ☑️

Your UI idea: **“Exponential Averaging” checkbox**

* **Checked** → Use `smoothedAngle` for the red dot.
* **Unchecked** → Use the *raw* `lastScannedAngle` so the dot shows exactly what the radar just saw.

---

## 8. Mini‑Challenges 🏆

1. **Slider Test:** Let α slide from 0.05 to 0.6 and watch how the dot behaves.
2. **Dodge Bot:** Fight a bot that swerves a lot. Which α keeps your aim most accurate?

Have fun experimenting and may your turret find its mark! 🎯
