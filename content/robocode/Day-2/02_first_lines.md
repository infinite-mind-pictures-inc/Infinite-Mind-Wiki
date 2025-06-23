---
title: "2 - First Lines of Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
enableToc: false
---
# 🤖 Robocode Lab: Day 2 – First Lines of Code

Welcome to Day 2! Today, your robot comes alive. While the core code is ready to go, this lesson is about **understanding** it and giving your bot a story.

We'll explore what your robot does, how it thinks, and then give it a name and backstory. Let’s get creative while learning!

---

## 🧰 Your Robot's Origin Story

Before we dive into the code, take a moment to imagine:

> “Where did your robot come from? What is its purpose in the Robocode arena? Who built it — and why?”

### 🎨 Activity: Bot Backstory

Open the `MyFirstBot.json` file in your workspace and fill in the story. Use this template:

```json
{
  "name": "The Blazing Falcon",
  "version": "1.0",
  "authors": ["Kai and Riley"],
  "description": "Built in a secret volcano lab to compete in the ultimate bot tournament. Loyal, swift, and fierce.",
  "homepage": "https://blazingfalcon-bots.org",
  "countryCodes": ["ca"],
  "platform": "Java",
  "programmingLang": "Java"
}
```

> ✅ Share your bot's name and backstory with the class when you're ready!

---

## 🕹️ Understanding the Code

Open `MyFirstBot.java` and look at these main parts:

### ✅ `run()` Method

```java
public void run() {
    while (isRunning()) {
        forward(100);
        turnGunLeft(360);
        back(100);
        turnGunLeft(360);
    }
}
```

Your robot moves forward, spins its gun in a full circle, moves back, and repeats.

### 🛡️ `onScannedBot` Event

```java
public void onScannedBot(ScannedBotEvent e) {
    fire(1);
}
```

When your bot detects an enemy, it fires!

---

## ✨ Try This

Change how your robot reacts. For example:

```java
fire(3);  // Increase attack power
```

Want it to move faster or scan more often? Tweak the `forward()` or `turnGunLeft()` values.


## 🔗 Navigation

🔹 [Back: Robocode Setup](/robocode/Day-1/03_setting_up)
🔹 [Next: Understanding Robocode Geometry](/robocode/Day-2/03_geometry)
