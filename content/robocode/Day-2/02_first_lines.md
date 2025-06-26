---
title: "2 - First Lines of Code"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
enableToc: false
---

# 🤖 Robocode Lab: Day 2 – First Lines of Code

Welcome to Day 2! Today, your robot comes alive. While the core code is ready to go, this lesson is about **understanding** it and giving your bot a story.

We'll explore what your robot does, how it thinks, and then give it a name and backstory. Let’s get creative while learning some real **Java** code!

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

### What is JSON?

**JSON** stands for **JavaScript Object Notation**. It's a lightweight text
format used to organize data into **key–value pairs**. Your `.json` file keeps
track of your robot's name, version, authors and more in a form that both people
and programs can easily read.

> ✅ Share your bot's name and backstory with the class when you're ready!

---

## 🕹️ Understanding the Code

Open `MyFirstBot.java` and look at these two main parts:

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

**What it means:**

* `public` means this method can be used by other parts of the program.
* `void` means this method doesn't return a value.
* `run()` is the method that runs when your bot starts.
* `while (isRunning())` keeps looping as long as your bot is alive.
* `forward(100);` and `back(100);` move the bot.
* `turnGunLeft(360);` spins the gun all the way around.

(more about this later)

**Important:**
Each line ends in a **semicolon** (`;`). This tells Java the command is done. Without it, the program won’t compile!

### 🛡️ `onScannedBot` Event

```java
public void onScannedBot(ScannedBotEvent e) {
    fire(1);
}
```

**What it means:**

* This method runs when your radar sees another bot.
* `ScannedBotEvent e` gives you info about the bot it sees.
* `fire(1);` tells your bot to shoot with power level 1.

---

## ✨ Try This

You can change how your robot behaves. Try changing these lines to customize its style:

```java
fire(3); // Increase attack power (range: 0.1 to 3.0)
forward(200); // Go farther forward before turning
turnGunLeft(720); // Scan with two full turns instead of one
```

Want to add more? Try:

```java
turnRight(90); // Turn the robot body
```

> Remember: Every Java statement must end with a **semicolon (;)**.

---

You're now officially a Java coder! 🚀 Keep experimenting with values and events to make your bot stronger and smarter.

## 🔗 Navigation

🔹 [Back: Robocode Setup](/robocode/Day-1/03_setting_up)
🔹 [Next: Understanding Robocode Geometry](/robocode/Day-2/03_geometry)
