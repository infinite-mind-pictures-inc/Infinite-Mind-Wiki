---

title: "1 - System.out.println for Debugging"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Let's jump into **1 - System.out.println for Debugging** 😎

# Using System.out.println

Robocode runs your robot inside a Java VM, so the standard way to print messages is with `System.out.println`. These messages show up in the Robocode console window while your robot is running. This is a very useful feature for debugging and understanding what your robot is doing at any moment.

```java
System.out.println("Scanning...");
```

> 📘 For full documentation of the `System` class, including `println`, see the [Java System class documentation](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html).

## Why Use println?

Using `System.out.println` helps you debug by letting you track what your robot is doing at key points. For example:

* When the robot starts or stops
* When it sees another robot
* When it hits a wall
* When it gets hit by a bullet

This lets you check what your robot is "thinking" and if it's doing what you intended.

## A Full Use Case Example

Let’s say you want your robot to introduce itself and report key events.

### Step 1: Create a Name Field

First, define a name in your robot class:

```java
import dev.robocode.tankroyale.botapi.*;
import dev.robocode.tankroyale.botapi.events.*;

public class DebugBot extends Bot {
    String name = "Mr Robot";

    public DebugBot() {
        super(BotInfo.fromFile("DebugBot.json"));
    }
```

### Step 2: Add println Messages in Key Methods

```java
    @Override
    public void run() {
        System.out.println("Hello! My name is " + name);
        while (true) {
            System.out.println("Turning right and scanning...");
            turnRight(45);
            forward(100);
        }
    }

    @Override
    public void onScannedBot(ScannedBotEvent e) {
        System.out.println(name + " saw a robot");
        fire(1);
    }

    @Override
    public void onHitByBullet(HitByBulletEvent e) {
        System.out.println(name + " was hit by a bullet from direction: " + e.getBullet().getDirection());
        back(50);
    }

    @Override
    public void onHitWall(HitWallEvent e) {
        System.out.println(name + " hit a wall");
        back(100);
    }
```

### Output Example

In the Robocode console, you’ll see messages like:

```
Hello! My name is Mr Robot
Turning right and scanning...
Mr Robot saw a robot
Mr Robot was hit by a bullet from direction: 45.0
Mr Robot hit a wall
```

This gives you a real-time log of what’s going on during battle.

## Tips for Effective Debugging

* Be specific in your messages (e.g., include robot name, event type, and values).
* Use clear and consistent formatting.
* Temporarily comment out prints if they’re overwhelming.
* Print variables you think might be causing issues.

## Challenge

Try adding `System.out.println` to other events like `onBulletHit`, `onBulletMissed`, and `onRobotDeath`. See if you can log all actions your robot takes and adjust behavior based on what you learn.

---

## Navigation

➡️ [Next: ScannedRobotEvent](/robocode/Day-4/01_scanned_robot_event)
