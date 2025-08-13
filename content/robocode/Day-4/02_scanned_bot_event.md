---

title: "3 - ScannedBotEvent"
tags:
  - robocode
  - tutorial
  - hands-on
  - cs
  - intermediate
---

> Gear up for **3 - ScannedBotEvent** 😎

# Working with ScannedBotEvent

`ScannedBotEvent` is a key event in Robocode, fired automatically whenever your robot's radar detects another robot. Almost every robot should override this method to respond to detected opponents.

## `onScannedBot(ScannedBotEvent event)`

### What it Does

This method is called when your robot sees another robot — i.e., when your radar scan "hits" another robot. You must override this method if you want your robot to respond to nearby opponents.


The **bearing** you receive is *relative* to your robot's current heading.

### Method Signature

```java
public void onScannedBot(ScannedBotEvent event)
```

### Parameters

* `event`: An instance of `ScannedBotEvent` containing data about the scanned robot.

### Event Data Includes:

| Method                | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `getScannedByBotId()` | Returns the ID of the bot that performed the scan.         |
| `getScannedBotId()`   | Returns the ID of the scanned bot.                         |
| `getX()`              | X-coordinate of the scanned bot (center of the bot).       |
| `getY()`              | Y-coordinate of the scanned bot (center of the bot).       |
| `getEnergy()`         | Energy level of the scanned bot.                           |
| `getDirection()`      | Movement direction (angle) of the scanned bot in degrees.  |
| `getSpeed()`          | Speed of the scanned bot (in units per turn).              |


### Example:

```java
@Override
public void onScannedBot(ScannedBotEvent event) {
    // 1. Remember where the opponent is
    double opponentX = event.getX();  // Opponent's X position
    double opponentY = event.getY();  // Opponent's Y position

    // 2. Remember where *we* are
    double myX = getX();           // My bot's X position
    double myY = getY();           // My bot's Y position

    // 3. Find the distance between us
    double dx = opponentX - myX;      // How far apart we are in X
    double dy = opponentY - myY;      // How far apart we are in Y

    // 4. Use the Pythagorean theorem to get the total distance
    double distance = Math.sqrt(dx * dx + dy * dy);

    System.out.println("Opponent detected at: " + distance + " pixels");

    // Fire with stronger power if close, weaker if far
    if (distance < 100) {
        fire(3);
    } else {
        fire(1);
    }
}

```

### Summary:

* Override `onScannedBot` to react to opponents.
* Use the data in `ScannedBotEvent` to decide when and how to fire.

---

## Navigation

🡌 [Back: System.out.println for Debugging](/robocode/Day-4/01_system_out_debugging)
➡️ [Next: HitByBulletEvent](/robocode/Day-4/03_hit_by_bullet_event)
