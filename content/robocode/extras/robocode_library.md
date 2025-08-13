---
title: "Robocode Library"
tags:
  - robocode
---
# Robocode Tank Royale Java API v0.30.2 — Function & Event Reference

> **How to use this doc**  Each heading is a *function* or *event class*.
> – *Description* explains what it does.
> – *Example* is a minimal Java snippet you can paste into your bot.

---

## ✅ Core Bot Methods

### Movement & Body Control

#### `forward(double distance)`

Moves the bot forward until the distance is reached or a wall/robot stops it.

```java
forward(150);
```

#### `back(double distance)`

Moves the bot backwards.

```java
back(75);
```

#### `turnLeft(double degrees)` / `turnRight(double degrees)`

Rotate the **body** counter‑clockwise / clockwise.

```java
turnLeft(90);
```

#### `turnGunLeft(double degrees)` / `turnGunRight(double degrees)`

Rotate only the gun.

```java
turnGunRight(45);
```

#### `turnRadarLeft(double degrees)` / `turnRadarRight(double degrees)`

Rotate the radar dish.

```java
turnRadarRight(360);   // full sweep
```

#### `fire(double power)`

Fire a bullet. `power` ∈ \[0.1 … 3].

```java
if (getGunHeat()==0) fire(2.0);
```

#### `rescan()`

Trigger a radar scan immediately.

```java
rescan();
```

---

### Utility & Introspection

* `getGunTurnRemaining()` – degrees left for gun to finish turning
* `getRadarTurnRemaining()` – degrees left for radar
* `getTurnRemaining()` – body turn remainder
* `getDistanceRemaining()` – outstanding move distance
* `isRunning()` – `true` while bot is alive
* `calcBulletSpeed(double power)` – returns speed (`20 – 3 × power`)
* `calcGunHeat(double power)` – heat added by a shot (`1 + power/5`)
* `clearEvents()` – flush the event queue
* `broadcastTeamMessage(Object msg)` – send JSON‑serialisable data to teammates

```java
double bulletTime = opponentDist / calcBulletSpeed(1.8);
```

---

### State Accessors (`BaseBot` / `BotState`)

```java
getEnergy();      // current energy
getX(); getY();   // position (centre)
getDirection();   // body heading (°)
getGunDirection();
getRadarDirection();
getGunHeat();
getSpeed();
```

---

### Bullet Information (`BulletState`)

* `getBulletId()`
* `getOwnerId()`
* `getPower()` / `getSpeed()`
* `getDirection()`
* `getX()` / `getY()`

```java
for (BulletState b : getBulletStates()) {
    System.out.printf("Bullet %d @ %.0f,%.0f%n", b.getBulletId(), b.getX(), b.getY());
}
```

---

## 🚨 Event Classes & Handlers

> Override the matching `on…Event` method in your bot.
> Priorities shown are **defaults** from `DefaultEventPriority` (higher fires first).

### `WonRoundEvent` (150)

Round finished and *you* were last survivor.

```java
@Override public void onWonRound(WonRoundEvent e) {
    System.out.println("I won round " + e.getRoundNumber());
}
```

### `TickEvent` (100)

Occurs every game tick. Keep logic lightweight to avoid skipped turns.

```java
@Override public void onTick(TickEvent e) {
    if (e.getTurnNumber() % 10 == 0) rescan();
}
```

### `ScannedBotEvent` (80)

Radar spotted an opponent.

```java
@Override public void onScannedBot(ScannedBotEvent e) {
    double abs = getRadarDirection() + e.getBearing();
    turnGunRight(normalizeBearing(abs - getGunDirection()));
    if (getGunHeat()==0) fire(3);
}
```

### `HitByBulletEvent` (70)

You were hit.

```java
@Override public void onHitByBullet(HitByBulletEvent e) {
    setBack(100);
    setTurnRight(45);
}
```

### `BulletHitBotEvent` (70)

Your bullet struck another bot.

```java
@Override public void onBulletHitBot(BulletHitBotEvent e) {
    System.out.println("Damage="+ e.getDamage());
}
```

### `BulletFiredEvent` (70)

Confirmation shot left barrel.

```java
@Override public void onBulletFired(BulletFiredEvent e) {
    lastId = e.getBulletState().getBulletId();
}
```

### `BulletHitWallEvent` (60)

Your bullet hit the arena wall.

### `HitBotEvent` (50)

Physical collision with another bot.

### `SkippedTurnEvent` (50)

Bot exceeded time budget in previous tick – optimise your code!

### `CustomEvent` (60)

User‑defined `Condition` became true.

```java
addCustomEvent(() -> getEnergy() < 10);
@Override public void onCustomEvent(CustomEvent e) {
    setMaxSpeed(8);
    back(150);
}
```

### `HitWallEvent` (40)

Body collided with arena border.

### `BotDeathEvent` (30)

Another bot died.

### `TeamMessageEvent` (20)

Teammate sent message via `broadcastTeamMessage`.

```java
@Override public void onTeamMessage(TeamMessageEvent e) {
    System.out.println("Msg from " + e.getSenderId() + ": " + e.getMessage());
}
```

### `DeathEvent` (10)

Your bot died – last chance to log stats.

---

## 🛰 Quick‑Start Mini Bot

```java
public class SpinAndShoot extends Bot {
    @Override public void run() {
        setBodyColor(Color.CYAN);
        while (isRunning()) {
            turnRadarRight(360);   // continuous sweep
        }
    }

    @Override public void onScannedBot(ScannedBotEvent e) {
        double abs = getRadarDirection() + e.getBearing();
        turnGunRight(normalizeBearing(abs - getGunDirection()));
        if (getGunHeat()==0) fire(Math.min(3, 400/e.getDistance()));
    }
}
```

---

### More resources

* **Full Javadoc** → [https://robocode-dev.github.io/tank-royale/api/java/](https://robocode-dev.github.io/tank-royale/api/java/)
* **Sample bots** → check the `samples` directory in the course repo.

Happy coding & good luck in the arena! 🚀
