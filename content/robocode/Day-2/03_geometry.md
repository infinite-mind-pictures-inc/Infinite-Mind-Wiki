---
title: "3 - Robocode Geometry"
tags: ["robocode"]
enableToc: false
---

## 🗺️ Map Grid

Imagine your robot game map is a big piece of graph paper:

* Draw a flat line across (that’s the **X-line**) and a tall line up (that’s the **Y-line**).
* Where they meet in the **bottom-left corner**, write **(0, 0)** — that’s the starting point!
* Going **right** means X gets bigger. Going **up** means Y gets bigger.

If your tank is sitting at a point, like (300, 200), that means:

* It's 300 steps from the left wall.
* It's 200 steps up from the bottom.

The middle of the arena is halfway across and halfway up.
If the arena is 800 wide and 600 tall, the middle is at (400, 300).

---

## 🔄 Turning Directions (Easy as Turning a Toy Car!)

Think of angles like spinning a spinner or turning your body. Angles are like direction numbers:

| Angle | Direction | What It Means |
| ----- | --------- | ------------- |
| 0°    | East      | Facing right  |
| 90°   | North     | Facing up     |
| 180°  | West      | Facing left   |
| 270°  | South     | Facing down   |

* Turn **right** ➡️ means **subtract** from your angle.
* Turn **left** ⬅️ means **add** to your angle.

---

<div>
<img src="/images/low/robocode/coordinates.webp" alt="coordinates visual" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
</div>

<a href="https://robocode-dev.github.io/tank-royale/articles/coordinates-and-angles.html#coordinate-system">Robocode Tank Royale – Coordinates and Angles</a>

---

### 🎯 Turning Examples

* Want to face **up**? Turn to 90°.
* Want to go the **opposite way**? Add or subtract 180°.
* Want to turn a little left? Add 45°.

You can use a paper clock to help — pretend 0° is 3 o’clock, 90° is 12 o’clock, and so on!

---

## 🧭 Face the Right Way Before Moving

Let’s say you want your tank to go **up**:

1. Check which way it’s pointing now (your angle).
2. Up is 90° — so figure out how far you need to turn.
3. If your number is smaller, turn **left** (add the difference).
4. If it’s bigger, turn **right** (subtract the difference).
5. After that, drive forward!

---

## 🔢 Handy Math Tricks (No Calculator Needed!)

* Want to move forward in the direction you’re facing?
  Just draw a line from your spot in that direction.

* Want to know how far you are from something?
  Use this trick:

  * Count how far over (X difference)
  * Count how far up (Y difference)
  * Use those numbers to make a triangle and figure out the length.

* Want to face a target spot? Draw a line from your tank to it and measure the angle with a protractor!

---

## 📐 Quick Cheat Sheet

* Bottom-left is always (0, 0)
* Right = X gets bigger
* Left = X gets smaller
* Up = Y gets bigger
* Down = Y gets smaller
* Angles are like turns — left is more, right is less
* You can sketch your tank on paper to figure stuff out!

You can plan your whole game like a treasure map. Just grab some paper, draw your tank, and figure out where it needs to go!

---

➡️ [🤖 Minigame!](/robocode/Day-2/04_minigame)


## 🔗 Navigation

🔹 [Back: Robocode Setup](/robocode/Day-2/02_first_lines)
🔹 [Next: Java Variables and Datatypes](/robocode/Day-3/00_variables_and_datatypes)
