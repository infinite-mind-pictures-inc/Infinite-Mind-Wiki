---
title: "Other Tank Royale Events"
tags:
  - robocode
  - tutorial
  - cs
  - intermediate
---

We already used ScannedBotEvent, HitByBulletEvent, and HitWallEvent. Here's a short guide to the rest, each with a tiny tactic.

### HitBotEvent
When you bump into another bot.

**Key methods**
- `getVictimId()`
- `getEnergy()`
- `isRammed()`

```java
@Override
public void onHitBot(HitBotEvent e) {
    if (e.isRammed()) back(20);
    turnRight(30);
}
```

### BotDeathEvent
Another bot has died.

**Key methods**
- `getVictimId()`

```java
@Override
public void onBotDeath(BotDeathEvent e) {
    System.out.println("Bot " + e.getVictimId() + " is out!");
}
```

### DeathEvent
Your bot has been destroyed.

```java
@Override
public void onDeath(DeathEvent e) {
    System.out.println("We lost the battle.");
}
```

### WonRoundEvent
You win the round.

```java
@Override
public void onWonRound(WonRoundEvent e) {
    System.out.println("Round victory!");
}
```

### BulletFiredEvent
Your bot fires a bullet.

**Key methods**
- `getBullet()`

```java
@Override
public void onBulletFired(BulletFiredEvent e) {
    System.out.println("Fired bullet " + e.getBullet().getBulletId());
}
```

### BulletHitBotEvent
Your bullet hits another bot.

**Key methods**
- `getVictimId()`
- `getDamage()`
- `getEnergy()`

```java
@Override
public void onBulletHitBot(BulletHitBotEvent e) {
    System.out.println("Damaged bot " + e.getVictimId() + " for " + e.getDamage());
}
```

### BulletHitBulletEvent
Your bullet collides with another bullet.

**Key methods**
- `getBullet()`
- `getHitBullet()`

```java
@Override
public void onBulletHitBullet(BulletHitBulletEvent e) {
    System.out.println("Bullet collision! Boom!");
}
```

### BulletHitWallEvent
Your bullet smacks a wall.

**Key methods**
- `getBullet()`

```java
@Override
public void onBulletHitWall(BulletHitWallEvent e) {
    System.out.println("Bullet " + e.getBullet().getBulletId() + " hit a wall");
}
```

### TickEvent
Runs every turn.

**Key methods**
- `getBotState()`
- `getBulletStates()`
- `getEvents()`

```java
@Override
public void onTick(TickEvent e) {
    BotState me = e.getBotState();
    System.out.println("x=" + me.getX() + " y=" + me.getY());
    for (BotEvent ev : e.getEvents()) handle(ev);
}
```

### RoundStartedEvent
A new round begins.

**Key methods**
- `getRoundNumber()`

```java
@Override
public void onRoundStarted(RoundStartedEvent e) {
    System.out.println("Round " + e.getRoundNumber() + " start!");
}
```

### RoundEndedEvent
A round wraps up.

**Key methods**
- `getRoundNumber()`
- `getTurnNumber()`
- `getResults()`

```java
@Override
public void onRoundEnded(RoundEndedEvent e) {
    System.out.println("Round " + e.getRoundNumber() + " score: " + e.getResults().getTotalScore());
}
```

### GameStartedEvent
The game starts.

**Key methods**
- `getMyId()`
- `getInitialPosition()`
- `getGameSetup()`

```java
@Override
public void onGameStarted(GameStartedEvent e) {
    System.out.println("My id is " + e.getMyId());
}
```

### GameEndedEvent
The game is over.

**Key methods**
- `getNumberOfRounds()`
- `getResults()`

```java
@Override
public void onGameEnded(GameEndedEvent e) {
    System.out.println("Final score: " + e.getResults().getTotalScore());
}
```

### SkippedTurnEvent
Your bot was too slow and missed a turn.

```java
@Override
public void onSkippedTurn(SkippedTurnEvent e) {
    System.out.println("Skipped turn " + e.getTurnNumber());
}
```

Use these events as you grow your bot's brain!
