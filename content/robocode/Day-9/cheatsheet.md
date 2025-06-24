---
title: "Robocode Companion Sheet"
tags: ["robocode", "intermediate"]
enableToc: true
---

## 📦 Java Companion Sheet for Robocode

### 🔤 Variables & Data Types

```java
int count = 10;         // whole number
double energy = 99.9;   // decimal number
String name = "Bot";    // text
boolean alive = true;   // true or false
```

### 🔁 Loops

```java
while (isRunning()) {
    forward(100);
    turnRight(90);
}

for (int i = 0; i < 4; i++) {
    turnLeft(90);
    back(50);
}
```

### 🚦 Conditionals

```java
if (energy < 20) {
    fire(0.5);
} else if (energy < 50) {
    fire(1.5);
} else {
    fire(3);
}
```

### 🔧 Methods

```java
public void myMove() {
    forward(100);
    turnRight(90);
}
```

### 📚 Classes & Objects

```java
BotState state = getBotState();
double x = state.getX();
```

---

## 🤖 Robocode Tank Royale Basics

### 🔨 Bot Skeleton

```java
public class MyBot extends Bot {
    @Override
    public void run() {
        while (isRunning()) {
            forward(100);
            turnRight(90);
        }
    }

    @Override
    public void onScannedBot(ScannedBotEvent e) {
        fire(1);
    }
}
```

### 🚗 Movement Commands

```java
forward(100);       // move forward
back(50);            // move backward
turnLeft(90);        // turn left
turnRight(90);       // turn right
```

### 🔫 Fire and Heat

```java
fire(2.5);           // fire bullet (0.1 to 3.0)
getGunHeat();        // check if gun is cool
```

Bullet speed = `20 - 3 × firepower`

### 🧠 Radar & Gun

```java
turnGunRight(30);
turnRadarLeft(90);
```

* Gun turn limit: 20°/turn
* Radar turn limit: 45°/turn

### 📍 Bot State

```java
getX(), getY()               // position
getDirection()               // facing angle
getEnergy()                  // current energy
getGunDirection(), getRadarDirection()
```

### 📡 Events

```java
onScannedBot(ScannedBotEvent e)
onHitByBullet(HitByBulletEvent e)
onHitWall(HitWallEvent e)
```

Use `@Override` to define behavior.

### ⚙️ Utilities

```java
System.out.println("debug")  // print to console
```

---

## 💡 Tips for Winning

* Stay moving: dodging is defense
* Use low firepower when energy is low
* Turn perpendicular to enemy fire
* Scan frequently: keep tracking bots
* Avoid running into the walls

---
