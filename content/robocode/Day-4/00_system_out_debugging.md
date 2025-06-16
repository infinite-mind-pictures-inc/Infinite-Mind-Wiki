---

title: "1 - System.out.println for Debugging"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

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
public class DebugBot extends Robot {
    String name = "DebugBot3000";
```

### Step 2: Add println Messages in Key Methods

```java
    public void run() {
        System.out.println("Hello! My name is " + name);
        while (true) {
            System.out.println("Turning right and scanning...");
            turnRight(45);
            ahead(100);
            scan();
        }
    }

    public void onScannedRobot(ScannedRobotEvent e) {
        System.out.println(name + " saw a robot at distance: " + e.getDistance());
        fire(1);
    }

    public void onHitByBullet(HitByBulletEvent e) {
        System.out.println(name + " was hit by a bullet from direction: " + e.getBearing());
        back(50);
    }

    public void onHitWall(HitWallEvent e) {
        System.out.println(name + " hit a wall at bearing: " + e.getBearing());
        back(100);
    }
```

### Output Example

In the Robocode console, you’ll see messages like:

```
Hello! My name is DebugBot3000
Turning right and scanning...
DebugBot3000 saw a robot at distance: 250.0
DebugBot3000 was hit by a bullet from direction: -45.0
DebugBot3000 hit a wall at bearing: 90.0
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
