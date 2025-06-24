---

title: "2 - ScannedRobotEvent"
tags: ["robocode", "tutorial", "hands-on", "cs", "intermediate"]
---

> Gear up for **2 - ScannedRobotEvent** 😎

# Working with ScannedRobotEvent

`ScannedRobotEvent` is a key event in Robocode, fired automatically whenever your robot's radar detects another robot. Almost every robot should override this method to respond to detected opponents.

## `onScannedRobot(ScannedRobotEvent event)`

### What it Does

This method is called when your robot sees another robot — i.e., when your radar scan "hits" another robot. You must override this method if you want your robot to respond to nearby enemies.


The **bearing** you receive is *relative* to your robot's current heading.

### Method Signature

```java
public void onScannedRobot(ScannedRobotEvent event)
```

### Parameters

* `event`: An instance of `ScannedRobotEvent` containing data about the scanned robot.

### Event Data Includes:

| Method                | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `getScannedBotId()`   | Returns the ID of the scanned bot.                         |
| `getX()`              | X-coordinate of the scanned bot (center of the bot).       |
| `getY()`              | Y-coordinate of the scanned bot (center of the bot).       |
| `getEnergy()`         | Energy level of the scanned bot.                           |
| `getDirection()`      | Movement direction (angle) of the scanned bot in degrees.  |
| `getSpeed()`          | Speed of the scanned bot (in units per turn).              |
| `getTurnRate()`       | The turn rate of the scanned bot (in degrees per turn).    |
| `getGunDirection()`   | The angle of the scanned bot's gun (in degrees).           |
| `getGunHeat()`        | How much heat is in the gun (used to know if it can fire). |
| `getRadarDirection()` | The angle of the scanned bot’s radar (in degrees).         |
| `getRadarSweep()`     | The radar’s scan arc width (in degrees).                   |


### Example:

```java
@Override
public void onScannedBot(ScannedBotEvent event) {
    // 1. Remember where the enemy is
    double enemyX = event.getX();  // Enemy's X position
    double enemyY = event.getY();  // Enemy's Y position

    // 2. Remember where *we* are
    double myX = getX();           // My bot's X position
    double myY = getY();           // My bot's Y position

    // 3. Find the distance between us
    double dx = enemyX - myX;      // How far apart we are in X
    double dy = enemyY - myY;      // How far apart we are in Y

    // 4. Use the Pythagorean theorem to get the total distance
    double distance = Math.sqrt(dx * dx + dy * dy);

    System.out.println("Enemy detected at: " + distance + " pixels");

    // Fire with stronger power if close, weaker if far
    if (distance < 100) {
        fire(3);
    } else {
        fire(1);
    }
}

```

### Summary:

* Override `onScannedRobot` to react to enemies.
* Use the data in `ScannedRobotEvent` to decide when and how to fire.

---

## Navigation

🡌 [Back: System.out.println for Debugging](/robocode/Day-4/00_system_out_debugging)
➡️ [Next: HitByBulletEvent](/robocode/Day-4/02_hit_by_bullet_event)
