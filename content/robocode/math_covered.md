---
title: "Math Topics"
---

# Math Topics in Our Robocode Course ✨

Welcome to Robocode! In this course, we learn how to make robots that can drive around, turn, scan for opponents, and fire their cannons. To make our robots smart, we use some math magic. Let's break it down in a fun way!

---

## 🌍 Angles: Turning and Aiming

Imagine you are standing in the middle of a circle. If you turn all the way around, you turn **360 degrees**. That means:

* 0° = facing right (east)
* 90° = facing up (north)
* 180° = facing left (west)
* 270° = facing down (south)

In Robocode, we use angles to:

* Point our tank in the right direction
* Aim our gun at an opponent
* Draw arrows and dots on the radar

Every time we want to rotate or aim, we think: "Which way do I want to turn, and how many degrees?"

---

## 📈 Percentages: How Much Energy?

Our robot has **energy**. When we get hit, we lose energy. When we shoot, we spend energy. We often show energy with a **bar** that fills up:

* 100% means full energy (awesome!)
* 50% means half energy (be careful!)
* 0% means the robot is destroyed (uh-oh!)

We use percentages to show how much energy is left. It's just like saying, "You have 70 out of 100 points," or "You're 70% full."

---

## ⚖️ Exponential Averaging: Smoother Thinking

When our robot scans for an opponent, it gets an angle. But opponents move! The angle changes a lot and can be jumpy.

To fix that, we use **exponential averaging**. This is like saying:

> "I trust the new angle a little, but I also remember the old one."

We mix them together like this:

* New Angle = (Old × 85%) + (New Scan × 15%)

This helps our robot keep a smooth guess of where the opponent is. The more we scan, the better our guess becomes!

---

## ✨ Why This Matters

These math ideas help us:

* Turn smoothly
* Aim accurately
* Make good decisions

And best of all: they help our robot win battles!

Keep learning, experimenting, and playing with math. You're building powerful robots *and* a powerful brain!
