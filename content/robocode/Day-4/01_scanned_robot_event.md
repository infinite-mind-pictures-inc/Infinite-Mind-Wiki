---

title: "2 - ScannedRobotEvent"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
-----------------------------------------------------------------

# Working with ScannedRobotEvent

`ScannedRobotEvent` is a key event in Robocode, fired automatically whenever your robot's radar detects another robot. Almost every robot should override this method to respond to detected opponents.

## `onScannedRobot(ScannedRobotEvent event)`

### What it Does

This method is called when your robot sees another robot — i.e., when your radar scan "hits" another robot. You must override this method if you want your robot to respond to nearby enemies.

> ⚠️ Note: The radar only detects robots within a specific range, defined by `Rules.RADAR_SCAN_RADIUS`, which is **1200 pixels**.

The **bearing** you receive is *relative* to your robot's current heading, **not** an absolute angle.

### Method Signature

```java
public void onScannedRobot(ScannedRobotEvent event)
```

### Parameters

* `event`: An instance of `ScannedRobotEvent` containing data about the scanned robot.

### Event Data Includes:

* `getDistance()`: Distance to the scanned robot.
* `getBearing()`: Relative angle to the robot.
* `getHeading()`: Absolute heading of the enemy.
* `getVelocity()`: How fast the enemy is moving.
* `getEnergy()`: Remaining energy of the opponent.
* `getName()`: The name of the robot.

### Example:

```java
public void onScannedRobot(ScannedRobotEvent event) {
    System.out.println("Enemy detected at: " + event.getDistance() + " pixels");

    // Basic targeting logic
    if (event.getDistance() < 100) {
        fire(3);  // Strong shot at close range
    } else {
        fire(1);  // Weaker shot at long range
    }
}
```

## Firing Assistance in Robocode

Robocode assists **basic robots** with targeting under certain conditions:

If:

1. The radar and gun are aligned (and were aligned last turn),
2. The event is current,
3. `fire()` is called before any other movement or turn actions,

Then:

* Your bullet will automatically be aimed at the scanned robot. This can make your robot more accurate without manually calculating angles.

⚠️ **Important**: AdvancedRobots **do not** get this assistance. You must manually calculate angles and positions if you are using an `AdvancedRobot`.

### Summary:

* Override `onScannedRobot` to react to enemies.
* Use the data in `ScannedRobotEvent` to decide when and how to fire.
* Understand the game’s assisted aiming system to optimize shot timing.

---

## Docs and References

* [ScannedRobotEvent Javadoc](https://docs.oracle.com/javase/8/docs/api/robocode/ScannedRobotEvent.html)
* [System Class (for println)](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html)
* [Rules.RADAR\_SCAN\_RADIUS](https://robocode.sourceforge.io/docs/robocode/Rules.html)

---

## Navigation

🡌 [Back: System.out.println for Debugging](/robocode/Day-4/00_system_out_debugging)
➡️ [Next: HitByBulletEvent](/robocode/Day-4/02_hit_by_bullet_event)
